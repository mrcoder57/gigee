import React from 'react'
import { Skeleton } from '../ui/skeleton'

const Gigskeleton = () => {
  return (
    <div className="flex flex-col w-full mx-auto mt-24  mb-10">
        <div className='flex flex-col items-center justify-center'>
      <Skeleton className="mt-8 w-[85%] lg:h-[560px] h-[320px] relative items-center justify-center rounded-xl shadow-lg" />
      </div>
      <div className='flex lg:flex-row flex-col-reverse justify-around ml-8 lg:ml-0 lg:gap-16 gap-5 mt-5 '>
      <div className="flex flex-col justify-around space-y-2  mb-5">
        <Skeleton className="lg:w-96 w-[300px] lg:h-16 h-4 relative items-center justify-center" />
        <Skeleton className="h-4 lg:w-96 w-[300px] " />
      </div>
      <Skeleton className=' flex flex-col lg:w-[360px] w-[300px] lg:h-[160px] h-20 items-center '/>
      </div>
    </div>
  )
}

export default Gigskeleton