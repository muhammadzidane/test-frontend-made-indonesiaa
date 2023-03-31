import { useLoginMutation } from '../redux/rtk'

export const useAuth = () => {
  const [login, { data: dataLogin, isLoading: isLoadingLogin }] = useLoginMutation()

  return {
    login,
    dataLogin,
    isLoadingLogin
  }
}
