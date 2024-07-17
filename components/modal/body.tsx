import React from 'react'
import Cards from '../gigCards/Cards';

const Body = () => {
  return (
    
    <div className=' my-12 p-2'>
    <div className='grid mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 desktop:grid-cols-5 gap-10 justify-around ml-5 lg:gap-y-16 gap-y-8'>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
    </div>
</div>
  )
}

export default Body;