// Interfaces
import { type IInitAuthState } from '../redux/interfaces'

// Define the initial state using that type
export const INIT_AUTH_STATE: IInitAuthState = {
  auth: {
    accessToken: null,
    userData: {},
    isLogin: false
  }
}
