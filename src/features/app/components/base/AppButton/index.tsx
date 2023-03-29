// React
import React from 'react'

// CVA
import { cva } from 'class-variance-authority'

// Ant
import { Button } from 'antd'

// CVA
import { type IAppButtonProps } from './interfaces'

// export const button = cva('', {
//   variants: {
//     intent: {
//       primary: [
//         // 'bg-white',
//         // 'text-gray-800',
//         // 'border-gray-400',
//         // 'hover:bg-gray-100'
//       ],
//       secondary: [
//         // 'bg-white',
//         // 'text-gray-800',
//         // 'border-gray-400',
//         // 'hover:bg-gray-100'
//       ]
//     },
//     size: {
//       sm: ['text-sm'],
//       md: ['text-base'],
//       lg: ['text-lg', 'font-bold'],
//       xl: ['text-xl', 'font-extrabold'],
//       '2xl': ['text-2xl', 'font-black']
//     }
//   },
//   compoundVariants: [{ intent: 'primary', size: 'md' }],
//   defaultVariants: {
//     intent: 'primary',
//     size: 'md'
//   }
// })

const AppButton: React.FC<IAppButtonProps> = ({ children, ...props }) => (
  <Button className='' {...props}>{children}</Button>
)

export default AppButton
