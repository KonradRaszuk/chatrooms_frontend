import { useQuery } from "@tanstack/react-query"
import { getChatrooms } from "../api/chatrooms"

export const CHATROOMS_QUERY_KEY = ['chatrooms'] as const;

export const useGetChatrooms = () => {
  return useQuery({
    queryFn: getChatrooms,
    queryKey: CHATROOMS_QUERY_KEY,
    staleTime: 60 * 1000,
    retry: 1, 
  })
}