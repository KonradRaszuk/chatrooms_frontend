import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useMe } from '../hooks/get-me.hook';

type Props = {
  messages: any[]
}

export default function Chat({ messages }: Props) {

  const { data: user, isLoading } = useMe();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='messages_wrapper'>
      {messages.map((message) => <ChatMessage textMessage={message.text} isYourMessage={user!.id === message.userId} nick={message.nick} />)}
    </div>
  )
}