import React from 'react'
import Image from 'next/image'
import { activities } from '@/utils/constants'
const Activities = () => {
  return (
    <div className=' flex flex-col items-start justify-center py-6 gap-y-5 px-4'>
        {activities.map((activity,index)=>(
          <div className=' flex flex-row gap-x-5 justify-center items-center'>
          <Image src={activity.icon} alt="activity" width={24} height={21} />
          <div className=' flex flex-col justify-start items-start'>
              <p className=' font-[500] text-[#222222] text-[16px]'>{activity.title}</p>
              <p className=' text-sm text-[#6a6a6a]'> {activity.description}</p>
          </div>
      </div>
        ))}
  
        
    </div>
  )
}

export default Activities