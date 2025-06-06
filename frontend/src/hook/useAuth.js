import { useMutation } from "@tanstack/react-query";
import { useStoreToken } from "../store/useTokenStore";
import { useNavigate } from "react-router";
import { useSetPersist } from "../store/usePersistUserStore";
import { registerUser, logoutUser, loginUser } from "../features/auth/api";
import { useSetUserData } from "../store/useStoreUserData";

export const useLoginUsers = () => {
  const navigate = useNavigate();
  const userData = useSetUserData();
  const persist = useSetPersist();
  const setToken = useStoreToken((state) => state.setAccessToken);
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      setToken(data.accessToken);
      userData(data.user);
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
  const setToken = useStoreToken((state) => state.setAccessToken);
  const persist = useSetPersist();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
    onSuccess: (accessToken) => {
      setToken(accessToken);
      persist(true);

      navigate("/home");
    },
    onError: (data) => {
      console.log(data.response.data.message);
    },
  });
};

export const useLogout = () => {
  const clearToken = useStoreToken((state) => state.clearAccessToken);
  const navigate = useNavigate();
  const persist = useSetPersist();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearToken();

      persist(false);
      navigate("/");
    },
    onError: () => {
      console.log("error logout");
    },
  });
};
