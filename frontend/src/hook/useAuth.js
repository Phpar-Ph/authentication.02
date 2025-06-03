import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    onSuccess: () => {
      console.log("success register");
    },
    onError: (data) => {
      console.log(data.response.data.message);
    },
  });
};

export const useGetUserData = (enable = false) => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      axios.get(`${baseURL}/api/user/data`).then((res) => res.data.userData),
    onSuccess: () => {
      console.log("Data  fetch");
    },
    enable: !!enable,
  });
};

export const useGetUserAuth = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: () =>
      axios
        .get(`${baseURL}/api/auth/is-auth`, {
          withCredentials: true,
        })
        .then((res) => res.data),
    onSuccess: () => {
      console.log("User authenticated");
    },
  });
};
