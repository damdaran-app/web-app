import { samim } from '@/components/fonts'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-screen bg-lightGray flex justify-center items-center'>
        <h1 className={`${samim.className} text-black`}>درحال بارگزاری...</h1>
    </div>
  )
}

export default loading
