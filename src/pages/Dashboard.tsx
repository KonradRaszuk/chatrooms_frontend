// import { useNavigate } from '@tanstack/react-router';
// import { useState } from 'react';
import ChatRoomsList from '../components/ChatRoomsList';
import Header from '../components/Header';
// import { useCreateChatroom } from '../hooks/create-chatroom.hook';
// import ChatRoomCreate from '../components/ChatRoomCreate';

// const mockChats = [
//   { id: '1', name: 'Czat z Bienia' },
//   { id: '2', name: 'Zespół Projektowy' },
// ];

const Dashboard = () => {
  // const navigate = useNavigate();
  // const [chats, setChats] = useState(mockChats);
  // const [newChatName, setNewChatName] = useState('');

  

  // const handleJoin = (id: string) => {
  //   navigate({ to: '/chat/$chatId', params: { chatId: id } });
  // };

  // const handleCreate = () => {
  //   if (!newChatName.trim()) return;
  //   const newId = (chats.length + 1).toString();
  //   const newChat = { id: newId, name: newChatName.trim() };
  //   setChats([...chats, newChat]);
  //   setNewChatName('');
    
  // };

  return (
    <div className='dashboard_wrapper'>
      <Header welcomeText='GaduGadu'/>
      <ChatRoomsList/>
    </div>
  );
};

export default Dashboard;
