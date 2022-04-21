import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import { globalRegister } from './global'
import { setupStore } from '@/store/index'

import hyRequest from '@/service'
hyRequest.request({
  method: 'GET',
  url: 'ss',
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  },
  showLoading: true
})

import router from './router'
import store from './store'
setupStore()
const app = createApp(App)
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')
