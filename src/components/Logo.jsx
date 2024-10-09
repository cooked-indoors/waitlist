import Image from 'next/future/image'
import logo from '@/assets/logo.svg'

export function Logo(props) {
  return (
    <div {...props}>
      <div className='flex justify-center flex-row'>
        <Image className='' src={logo} alt='' unoptimized width={40} height={40}/>
        <div className='ml-2'>
          <p className='m-0 pt-3 text-sm font-bold text-white'>
            Cooked Indoors
          </p>
        </div>
      </div>
    </div>
  )
}
