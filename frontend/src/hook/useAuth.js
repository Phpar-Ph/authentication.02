import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToken } from "../store/useTokenStore";
import { useNavigate } from "react-router";
import { useSetPersist } from "../store/usePersistUserStore";
// Login
const baseURL = "http://localhost:5000";
export const useLoginUsers = () => {
  return useMutation({
    mutationFn: (data) =>
      axios
        .post(
          `${baseURL}/api/auth/login`,
          { email: data.email, password: data.password },
          { withCredentials: true }
        )
        .then((res) => {
          return res.data.accessToken;
        }),
    onSuccess: () => {
      console.log("Success Login");
    },
    onError: () => {
      console.log("Sign-in failed, please try again.");
    },
  });
};

// REgister
export const useRegister = () => {
  const token = useToken();
  const persist = useSetPersist();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) =>
      axios
        .post(
          `${baseURL}/api/auth/register`,
          {
            name: data.name,
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          return res.data.accessToken;
        }),
    onSuccess: (accessToken) => {
      navigate("/home");
      persist(true);
      token(accessToken);
    },
    onError: (data) => {
      console.log(data.response.data.message);
    },
  });
};
