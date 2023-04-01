export interface IUserData {
  id: string
  branch_id: number
  name: string
  username: string
  phone: string
  email: string
  gender: string
  avatar: string
  birth_date: Date
  role: string
  is_active: boolean
  is_verified_email: boolean
  deleted_at: null
}

export interface IInitAuthState {
  auth: {
    accessToken: string | null
    userData: IUserData | Record<string, never>
    isLogin: boolean
  }
}
