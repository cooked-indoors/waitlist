import React from 'react'

const GeneralLayout = ({ children }) => {


  return (
    <>
    <div className='h-screen overflow-auto'>
    <div
          className='absolute h-full w-full bg-cover bg-center'
          style={{
            backgroundImage:
              "url('/bg2.jpeg')"
          }}>
          <span
            id='overlay'
            className='absolute h-full w-full bg-black opacity-10'></span>
        </div>
          {/* main body */}
          <main>
            <div className='py-2'>{children}</div>
          </main>
            <div className='bottom-4 flex justify-center absolute right-0 left-0'>
              <hr className='hidden sm:block w-5/12'/><span className='-mt-1.5 px-1 text-white text-xs sm:whitespace-nowrap'>Copyright © 2023 cookedindoors.com. All rights reserved</span><hr className='hidden sm:block w-5/12'/>
            </div>
        </div>
    </>
  )
}

export default GeneralLayout
