import serviceApi from '@/features/app/redux/rtk'

export const authApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload.body
      }),
      transformResponse: ({ accessToken, userData }) => ({ accessToken, userData })
    })
  }),
  overrideExisting: false
})

export const { useLoginMutation } = authApi
