// React
import React, { useCallback } from 'react'

// Ant
import { Form } from 'antd'

// Components
import { AppButton, AppCheckBox, AppInput, AppText } from '@/features/app/components/base'

// Interfaces
import { type ILoginFormValues } from './interfaces'

// Custom hooks
import { useAuth } from '@/features/auth/hooks'
import { useAppDispatch } from '@/features/app/hooks'
import { authSetAuthenticatedUser } from '@/features/auth/redux/slice'

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [formLogin] = Form.useForm()
  const { login, isLoadingLogin } = useAuth()

  /**
   * @description On submit login form
   * @param values ILoginFormValues
   * @returns Promise<void>
   */
  const onFinish = useCallback(async (values: ILoginFormValues): Promise<void> => {
    try {
      const response = await login({ body: values }).unwrap()
      dispatch(authSetAuthenticatedUser(response))
    } catch (error) {
      formLogin.resetFields()
    }
  }, [dispatch, formLogin, login])

  return (
    <Form onFinish={onFinish} form={formLogin} className="border-b border-gray-1 pb-1">
      <Form.Item
        name='user'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <AppInput
          label='Email address or username'
          placeholder='Email address or username'
        />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <AppInput
          type='password'
          label='Password'
          placeholder='Password'
        />
      </Form.Item>

      <AppText
        className='underline'
        weight='semibold'
      >
        Forgot your password?
      </AppText>

      <Form.Item>
        <div className='flex justify-between items-center mt-4'>
          <AppCheckBox>Remember me</AppCheckBox>
          <AppButton
            htmlType='submit'
            className='w-[121px]'
            color='spotify'
            size='large'
            rounded='large'
            loading={isLoadingLogin}
          >
            LOG IN
          </AppButton>
        </div>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
