import hyRequest from '../index'
import { Iaccount, IDatetype, ILogintype } from './types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserinfo = '/users/',
  LoginUserMenu = '/role/'
}
export function accountLoginRequest(account: Iaccount) {
  return hyRequest.post<IDatetype<ILogintype>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDatetype>({
    url: LoginApi.LoginUserinfo + id,
    showLoading: false
  })
}

export function requestUserMenu(id: number) {
  return hyRequest.get<IDatetype>({
    url: LoginApi.LoginUserMenu + id + 'menu',
    showLoading: false
  })
}
