// React
import React, { useCallback, useEffect } from 'react'

// Ant
import { Form } from 'antd'

// Components
import { AppButton, AppCheckBox, AppInput, AppText } from '@/features/app/components/base'

// Interfaces
import { type ILoginFormValues } from './interfaces'

import { useAuth } from '@/features/auth/hooks'

const LoginForm: React.FC = () => {
  const [formLogin] = Form.useForm()
  const {
    login,
    isLoadingLogin
  } = useAuth()

  /**
   * @description On submit login form
   * @param values ILoginFormValues
   * @returns Promise<void>
   */
  const onFinish = async (values: ILoginFormValues): Promise<void> => {
    try {
      await login({ body: values }).unwrap()
    } catch (error) {
      formLogin.resetFields()
    }
  }

  return (
    <Form onFinish={onFinish} form={formLogin} className="border-b border-gray-1 pb-1">
      <Form.Item
        name='username'
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
