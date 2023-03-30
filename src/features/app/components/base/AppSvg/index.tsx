// React
import React, { useEffect } from 'react'

// Hooks
import { useDynamicSvg } from '@/features/app/hooks'

const AppSvg: React.FC = ({ iconName, svgProp }) => {
  const { loading, SvgIcon } = useDynamicSvg(iconName)

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    <>
      <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'>load</div>
      {SvgIcon && (
        <SvgIcon {...svgProp} />
      )}
    </>
  )
}

export default AppSvg
