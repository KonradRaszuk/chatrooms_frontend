import React from 'react'
import Card from './Card';
import ChatRoomCreate from '../components/ChatRoomCreate';
import { useGetChatrooms } from '../hooks/get-chatrooms.hook';
import { useNavigate } from '@tanstack/react-router';


type Props = {}

export default function ChatRoomsList({}: Props) {
  const navigate = useNavigate();

    const {data, isLoading, isError, error} = useGetChatrooms()

    if (isLoading) return (
      <div className='chatroomslist_wrapper'>
        <div className='loading_spinner_wrapper'>
          <div className='loading_spinner'></div>
        </div>
      </div>
    );

    if (isError) return (
       <div className='chatroomslist_wrapper'>
        <div className='loading_spinner_wrapper'>
          <p>Wystąpił błąd: {error.message}</p>
        </div>
      </div>
    );

  return (
    <div className='chatroomslist_wrapper'>

      <div className='chatroomslist_header'>
        <p>Available chats: </p>
        <p>{data.length} rooms</p>
      </div>

      <div className='chatroomslist_list'>
        {data?.map((room: any) => (
            <Card
            id={room.id}
            title={room.name}
            onJoin={() => navigate({
               to: `/chat/${room.id}`,
            })}
        />
        ))}
      </div>
        
      <div className='chatroomslist_create'>
          <ChatRoomCreate/>
        </div>
      
    </div>
  )
}