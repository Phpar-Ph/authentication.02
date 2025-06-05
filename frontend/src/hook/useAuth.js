import { useMutation } from "@tanstack/react-query";
import { useSetToken } from "../store/useTokenStore";
import { useNavigate } from "react-router";
import { useSetPersist } from "../store/usePersistUserStore";
import { register, login } from "../features/auth/api";
export const useLoginUsers = () => {
  const setToken = useSetToken();
  const persist = useSetPersist();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (accessToken) => {
      setToken(accessToken);
      persist(true);
      navigate("/home");
    },
    onError: () => {
      console.log("Sign-in failed, please try again.");
    },
  });
};

// REgister
export const useRegister = () => {
  const setToken = useSetToken();
  const persist = useSetPersist();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,
    onSuccess: (accessToken) => {
      setToken(accessToken);
      persist(true);
      console.log("ACCESS TOKEN set:", accessToken);

      navigate("/home");
    },
    onError: (data) => {
      console.log(data.response.data.message);
    },
  });
};
