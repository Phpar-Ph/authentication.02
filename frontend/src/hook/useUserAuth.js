import { useMutation } from "@tanstack/react-query";
import { useStoreToken } from "../store/useTokenStore";
import { useNavigate } from "react-router";
import { useSetPersist } from "../store/usePersistUserStore";
import { API_ROUTES } from "../constants/apiRoutes";

import { axiosPrivate } from "../api/axiosPrivate";

export const useLoginUsers = () => {
  const navigate = useNavigate();
  const persist = useSetPersist();
  const setToken = useStoreToken((state) => state.setAccessToken);
  const loginUser = async (data) => {
    const response = await axiosPrivate.post(API_ROUTES.AUTH.LOGIN, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  };

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      setToken(data.accessToken);
      persist(true);
      console.log("success login", data.accessToken);
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

  const registerUser = async (data) => {
    const response = await axiosPrivate.post(API_ROUTES.AUTH.REGISTER, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return response.data.accessToken;
  };

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

  const logoutUser = async () => {
    const response = await axiosPrivate.post(API_ROUTES.AUTH.LOGOUT);
    return response.data;
  };

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
