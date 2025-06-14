import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteChatroom, type DeleteChatroomPayload } from "../api/chatrooms";
import { CHATROOMS_QUERY_KEY } from "./get-chatrooms.hook";




export const useDeleteChatroom = (id: string) => {

    const queryClient = useQueryClient();

  return useMutation<unknown , unknown, DeleteChatroomPayload>({
    mutationFn: () => deleteChatroom(id),
    onSuccess: () => {
         queryClient.invalidateQueries({
        queryKey: CHATROOMS_QUERY_KEY,
      });

    },
    onError: (error: any) => {
      alert(`Wystąpił błąd: ${error.message}`)
    }
  })
}