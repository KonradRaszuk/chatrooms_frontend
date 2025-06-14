import React from "react";
import { useCreateChatroom } from "../hooks/create-chatroom.hook";
import type { CreateChatroomPayload } from "../api/chatrooms";

export default function ChatRoomCreate() {
  const createChatroom = useCreateChatroom();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: CreateChatroomPayload = {
      name: formData.get("name") as string,
    };

    createChatroom.mutate(payload);
  };

  return (
    <div className="chatroom_create_wrapper">
      <form className="form_create_chatroom" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter room name"
          className="form_create_chatroom_input"
          name="name"
        />
        <button type="submit" className="form_create_chatroom_button">
          CREATE&nbsp;ROOM
        </button>
      </form>
    </div>
  );
}
