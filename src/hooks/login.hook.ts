import { useMutation } from "@tanstack/react-query";
import {
  loginRequest,
  type LoginPayload,
  type LoginResponse,
} from "../api/auth";
import { router } from "../router";

export const useLogin = () => {
  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: loginRequest,
    onSuccess: (data: LoginResponse) => {
      // np. zapis tokena i przekierowanie
      localStorage.setItem("token", data.accessToken);
      router.navigate({
        to: "/",
      });
    },
    onError: () => {
      alert(`Wystąpił błąd`);
    },
  });
};
