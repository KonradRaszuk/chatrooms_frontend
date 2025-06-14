import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateChatroom,
  type UpdateChatroomPayload,
  type UpdateChatroomResponse,
} from "../api/chatrooms";
import { CHATROOMS_QUERY_KEY } from "./get-chatrooms.hook";

export const useUpdateChatroom = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateChatroomResponse, unknown, UpdateChatroomPayload>({
    mutationFn: updateChatroom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CHATROOMS_QUERY_KEY,
      });
      // np. zapis tokena i przekierowanie
      //   localStorage.setItem('token', data.accessToken)
      //   router.navigate({
      //     to: "/"
      //   })
    },
    onError: () => {
      alert(`Wystąpił błąd`);
    },
  });
};
