import React, { useState } from 'react';
import settingsIcon from '../assets/settings.png';
import { useDeleteChatroom } from '../hooks/delete-chatroom.hook';
import { useUpdateChatroom } from '../hooks/update-chatroom.hook';

interface RoomCardProps {
  id: string;
  title: string;
  onJoin: () => void;
}

export default function Card({title, onJoin, id}: RoomCardProps) {

    const deleteChatroom = useDeleteChatroom(id)
    const updateChatroom = useUpdateChatroom()

   function handleDelete() {
    const confirmed = window.confirm('Are you sure to delete room?');
    if (confirmed) {
      // Tu logika 
          deleteChatroom.mutate({id});
    }
  }

  function handleEdit() {
    const newName = window.prompt('Enter new room name:');
    if (newName && newName.trim() !== '') {
     // Tu logika 
      updateChatroom.mutate({id, name: newName})
    } else {
      alert('Name must not be empty!');
    }
  }

  const [showManager, setShowManager] = useState(false);

  const toggleManager = () => {
    setShowManager(prev => !prev);
  };


  return (
    <div className="room_card">

        <h3 className="room_title">{title}</h3>

        <div className='room_settings_wrapper'>
          <button className="join_button" onClick={onJoin}>
            <span>Join&nbsp;Room</span>
            <span className="join_arrow">→</span>
          </button>
          <button onClick={toggleManager} className='room_settings'><img src={settingsIcon} alt="settings" width="30" height="30"/></button>
        </div>


       <div className={`room_card_manager_wrapper ${showManager ? 'room_card_manager_wrapper_transition' : ''}`}>
         <button onClick={handleDelete} className="room_card_manager_btn">DELETE</button>
         <button onClick={handleEdit} className="room_card_manager_btn">EDIT</button>
       </div>
       
    </div>
  )
}