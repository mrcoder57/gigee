import React from 'react'
import UserHeader from './userHeaader'
import ScrollableChats from './scrollableChats'
import SendMessage from './sendMessage'

const Chats = () => {
  return (
    <div className=' lg:flex hidden flex-col h-screen w-full overflow-y-hidden shadow-md  ml-2'>
        <UserHeader></UserHeader>
        <ScrollableChats/>
        <div className=' mx-5'>
        <SendMessage/>
        </div>
    </div>
  )
}

export default Chats