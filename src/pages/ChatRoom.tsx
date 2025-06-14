import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import Header from "../components/Header";
import Chat from "../components/Chat";

import { useGetChatroomMessages } from "../hooks/get-chatroom-messages.hook";

import { useMe } from "../hooks/get-me.hook";
import { getSocket } from "../lib/socket";
import { useGetChatroomById } from "../hooks/get-chatroom-by-id.hook";

export default function ChatRoom() {
  const { id } = useParams({ from: "/chat/$id" });

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { text: string; userId: string; nick: string }[]
  >([]);

  const { data, isLoading, isError } = useGetChatroomMessages(id);

  const { data: user, isLoading: isUserLoading } = useMe();

  const {
    data: chatroomData,
    isLoading: chatroomIsLoading,
    isError: chatroomIsError,
  } = useGetChatroomById(id);

  useEffect(() => {
    if (!data) return;

    // odwrocic tablice

    const reversedData = data.reverse();

    setMessages(reversedData);
  }, [data]);

  useEffect(() => {
    if (!user || !id) return;

    const socket = getSocket();

    socket.connect();

    // dołącz do pokoju
    socket.emit("joinRoom", { chatroomId: id });

    const handleNewMessage = (msg: {
      text: string;
      userId: string;
      nick: string;
    }) => {
      setMessages((prev) => [msg, ...prev]);
      console.log("what");
    };

    // nasłuchuj wiadomości
    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.emit("leaveRoom", { chatroomId: id });
      socket.off("newMessage", handleNewMessage);
      socket.disconnect();
    };
  }, [id, user]);

  if (isLoading || isUserLoading || chatroomIsLoading)
    return (
      <div className="chatroom_wrapper">
        <div className="loading_spinner_wrapper">
          <div className="loading_spinner"></div>
        </div>
      </div>
    );

  if (isError || chatroomIsError)
    return (
      <div className="chatroom_wrapper">
        <div className="loading_spinner_wrapper">
          <p>Wystąpił błąd</p>
        </div>
      </div>
    );

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter' && message.trim() !== '') {
  //     alert(`INPUT: ${message}`);
  //     setMessage('');
  //   }
  // };

  //   useEffect(() => {
  //   if (data) {
  //     setMessages(data); // ustaw dane z React Query jako startowe
  //   }
  // }, [data]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const socket = getSocket();

    socket.emit("sendMessage", {
      chatroomId: id,
      userId: user?.id, // <- dodaj `useMe()` lub inny sposób autoryzacji
      text: message,
    });

    setMessage("");
  };

  return (
    <div className="chatroom_wrapper">
      <Header roomText={chatroomData.name} />

      <div className="chat_wrapper">
        <Chat messages={messages} /> {/* lista z wiadomosciami */}
        <div className="chat_prompt">
          {" "}
          {/* pole input */}
          <input
            type="text"
            placeholder="Type a message . . ."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button onClick={handleSendMessage}>
            <img
              src="/send-message.png"
              alt="send-message"
              width="30"
              height="30"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
