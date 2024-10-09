import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div className="text-center py-40">
    <h2 className="text-3xl mb-2 text-[#062A55]">
     Oopss... The page doesn&#39;t exist. 
    </h2>
    <Link href='/'>
    <p className='text-gray-500 cursor-pointer underline hover:text-[#062A55]'>proceed to waitlist</p>
    </Link>
  </div>
  )
}

export default Error