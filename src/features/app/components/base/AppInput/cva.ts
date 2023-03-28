// CVA
import { cva, type VariantProps } from 'class-variance-authority'

export const text = cva('', {
  variants: {}
})

// Interfaces
export interface IAppInputProps extends VariantProps<typeof text> {
  children: string | number
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}
