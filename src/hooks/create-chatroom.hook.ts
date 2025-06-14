import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createChatroom, type CreateChatroomPayload, type CreateChatroomResponse } from "../api/chatrooms"
import { CHATROOMS_QUERY_KEY } from "./get-chatrooms.hook";

export const useCreateChatroom = () => {

    const queryClient = useQueryClient();

  return useMutation<CreateChatroomResponse, unknown, CreateChatroomPayload>({
    mutationFn: createChatroom,
    onSuccess: (data: CreateChatroomResponse) => {
         queryClient.invalidateQueries({
        queryKey: CHATROOMS_QUERY_KEY,
      });
      // np. zapis tokena i przekierowanie
    //   localStorage.setItem('token', data.accessToken)
    //   router.navigate({
    //     to: "/"
    //   })
    },
    onError: (error: any) => {
      alert(`Wystąpił błąd: ${error.message}`)
    }
  })
}