import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { Iaccount } from '@/service/login/types'
import localCache from '@/utils/caches'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenu
} from '@/service/login/login'
import LocalCache from '@/utils/caches'
import router from '@/router/index'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenus = userMenu
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: Iaccount) {
      //1.登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      LocalCache.setCache('token', token)
      commit('changeToken', loginResult.data.token)
      const userInfo = await requestUserInfoById(id)
      //2.请求用户信息
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)
      //3.请求角色菜单树
      const userMenu = await requestUserMenu(id)
      commit('changeUserMenu', userMenu.data)
      LocalCache.setCache('userMenu', userMenu)
      //4.页面跳转到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = localCache.getCache('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
      }
    }
  }
}

export default loginModule
