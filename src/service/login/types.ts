export interface Iaccount {
  name: string
  password: string
}

export interface ILogintype {
  id: number
  name: string
  token: string
}

export interface IDatetype<T = any> {
  code: number
  data: T
}
