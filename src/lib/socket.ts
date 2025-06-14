import { io, Socket } from 'socket.io-client';

const URL = 'https://chatroomsbackend-production.up.railway.app/chatrooms'; // Twój backend + namespace

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    const token = localStorage.getItem('token');
    socket = io('https://chatroomsbackend-production.up.railway.app/chatrooms');
  }
  return socket;
};