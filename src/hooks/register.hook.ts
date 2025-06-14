import { useMutation } from "@tanstack/react-query";
import { registerRequest, type RegisterPayload } from "../api/auth";
import { router } from "../router";

export const useRegister = () => {
  return useMutation<unknown, unknown, RegisterPayload>({
    mutationFn: registerRequest,
    onSuccess: () => {
      alert("Rejestracja zakończona sukcesem!");
      router.navigate({
        to: "/login",
      });
      // np. zapis tokena i przekierowanie
      // router.navigate('/dashboard') albo dowolne działanie po sukces
    },
    onError: () => {
      alert(`Wystąpił błąd`);
    },
  });
};
