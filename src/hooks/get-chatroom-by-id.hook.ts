import { useQuery } from "@tanstack/react-query"
import { getChatroomById } from "../api/chatrooms"

export const CHATROOM_QUERY_BY_ID_KEY = ['chatroom'] as const;

export const useGetChatroomById = (id: string) => {
  return useQuery({
    queryFn: () => getChatroomById(id),
    queryKey: CHATROOM_QUERY_BY_ID_KEY,
  })
}