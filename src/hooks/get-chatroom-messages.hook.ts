import { useQuery } from "@tanstack/react-query"
import { getChatroomMessages } from "../api/chatroom-messages";

export const CHATROOM_MESSAGES_QUERY_KEY = ['chatroom-messages'] as const;

export const useGetChatroomMessages = (id: string) => {
  return useQuery({
    queryFn: () => getChatroomMessages(id),
    queryKey: CHATROOM_MESSAGES_QUERY_KEY, 
  })
}