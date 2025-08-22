import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   
   <div className='w-full relative'>
    <div className="flex-grow h-px bg-white/20 backdrop-blur-sm mt-8"></div>
      <div className='w-full flex flex-col md:flex-row md:justify-end items-center gap-2 px-2 py-4 md:gap-6 md:px-10 md:py-10'>
        <Link href='' className='text-gray-400 text-base hover:text-white'>Terms & Conditions</Link>
        <Link href="" className='text-gray-400 text-base hover:text-white'>Security & Privacy</Link>
        <Link href="" className='text-gray-400 text-base hover:text-white'>Copyright © 2025, JobXHunters</Link>
      </div>
    </div>
  )
}

export default Footer