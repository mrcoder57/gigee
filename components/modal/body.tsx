import React from 'react'
import MediaCard from '../ui/card'

const Body = () => {
  return (
    
    <div className=' p-2'>
    <div className='grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-4 desktop:grid-cols-4 gap-4 justify-center ml-5 gap-y-15'>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
    </div>
</div>
  )
}

export default Body;