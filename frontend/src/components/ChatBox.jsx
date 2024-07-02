import React from 'react'
import { Chatusers } from './Chatusers'
import { Chat } from './Chat'
import Chatnav from './Chatnav'

export const ChatBox = () => {
  return (
    <div>
        <Chatnav/>
        <Chatusers/>
        <Chat/>
    </div>
  )
}
