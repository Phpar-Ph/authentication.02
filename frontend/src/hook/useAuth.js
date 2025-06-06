import { useMutation } from "@tanstack/react-query";
import { useStoreToken } from "../store/useTokenStore";
import { useNavigate } from "react-router";
import { useSetPersist } from "../store/usePersistUserStore";
import { registerUser, logoutUser, loginUser } from "../features/auth/api";
import { useSetUserData } from "../store/useStoreUserData";
export const useLoginUsers = () => {
  const navigate = useNavigate();
  const userData = useSetUserData();
  const setToken = useStoreToken((state) => state.setAccessToken);
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Success", data.accessToken);
      setToken(data.accessToken);
      userData(data.user);
      console.log("Success", data.user);
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
      console.log("ACCESS TOKEN set:", accessToken);

      navigate("/home");
    },
    onError: (data) => {
      console.log(data.response.data.message);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      console.log("logout successful");
    },
    onError: () => {
      console.log("error logout");
    },
  });
};
