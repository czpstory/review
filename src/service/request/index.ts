import axios from 'axios'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './type'
const DEAFULT_LOADING = true
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
  loading?: LoadingInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    config.showLoading ??
      this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch
      )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例请求成功的拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '......数据请求中',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有实例请求失败的拦截器')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例响应成功的拦截器')
        this.loading?.close()
        const data = res.data
        return data
      },
      (err) => {
        // console.log('所有实例响应失败的拦截器')
        this.loading?.close()
        return err
      }
    )
  }
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            config = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          // 2.判断是否需要显示loading
          if (config.showLoading === false) {
            this.showLoading = config.showLoading
          }
          this.showLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
