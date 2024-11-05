

import React from 'react'
import { CalendarComp } from '../calendar/calendar'
import Steps from './steps'

const Anytime = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full py-20'>
        <h1 className='text-[50px] font-bold text-center max-w-xl pb-3'>Share any event at anytime</h1>
        <CalendarComp/>
        <Steps/>
    </div>
  )
}

export default Anytime