import React from 'react'
import { Chatusers } from './Chatusers'
import { Chat } from './Chat'
import Chatnav from './Chatnav'
import { ChatState } from '../context/ChatContext.jsx'

export const ChatBox = () => {
  let {user}=ChatState()
  console.log(user);
  return (
    <div>
        <Chatnav/>
        <Chatusers/>
        <Chat/>
    </div>
  )
}
