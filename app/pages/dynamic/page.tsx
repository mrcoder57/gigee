import Hero from '@/components/hero/hero'
import Content from '@/components/hero/content'
import React from 'react'
import Status from '@/components/hero/status-card'

const page = () => {
  return (
    <div className=' flex flex-col'>
        <Hero gigId='4677889ffsb'/>
        <div className=' flex lg:flex-row flex-col-reverse justify-around lg:gap-20 gap-7 lg:mx-20 mx-5'>
        <Content/>
        <Status state='okk' isDisable={false} gigId='4677889ffsb'/>
        </div>
       
    </div>
  )
}

export default page