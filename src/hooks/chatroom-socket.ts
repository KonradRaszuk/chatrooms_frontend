// hooks/useChatroomSocket.ts
import { useEffect, useRef } from 'react';
import { getSocket } from '../lib/socket';

export const useChatroomSocket = ({
  chatroomId,
  onNewMessage,
}: {
  chatroomId: string;
  onNewMessage: (msg: { id: string; nick: string; text: string }) => void;
}) => {

 
  useEffect(() => {
    const socket = getSocket();

    socket.connect();

    // dołącz do pokoju
    socket.emit('joinRoom', { chatroomId });

    // nasłuchuj wiadomości
    socket.on('newMessage', onNewMessage);

    return () => {
      socket.emit('leaveRoom', { chatroomId });
      socket.off('newMessage', onNewMessage);
      socket.disconnect();
    };
  }, [chatroomId, onNewMessage]);

  
};