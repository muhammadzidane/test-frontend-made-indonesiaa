// CVA
import { cva, type VariantProps } from 'class-variance-authority'

export const text = cva('', {
  variants: {
    intent: {
      primary: [
        // 'bg-white',
        // 'text-gray-800',
        // 'border-gray-400',
        // 'hover:bg-gray-100'
      ],
      secondary: [
        // 'bg-white',
        // 'text-gray-800',
        // 'border-gray-400',
        // 'hover:bg-gray-100'
      ]
    },
    size: {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg', 'font-bold'],
      xl: ['text-xl', 'font-extrabold'],
      '2xl': ['text-2xl', 'font-black']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'md' }],
  defaultVariants: {
    intent: 'primary',
    size: 'md'
  }
})

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  children: string | number
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}
