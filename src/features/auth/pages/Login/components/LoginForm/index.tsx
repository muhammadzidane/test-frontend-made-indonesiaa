// React
import React from 'react'

// Ant
import { Form } from 'antd'

// Components
import { AppButton, AppCheckBox, AppInput, AppText } from '@/features/app/components/base'

// Interfaces
import { type ILoginFormValues } from './interfaces'

const LoginForm: React.FC = () => {
  /**
   * @description On submit login form
   * @param values ILoginFormValues
   * @returns void
   */
  const onFinish = (values: ILoginFormValues): void => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onFinish={onFinish} className="border-b border-gray-1 pb-1">
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
          >
            LOG IN
          </AppButton>
        </div>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
