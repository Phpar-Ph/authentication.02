import { useQuery } from "@tanstack/react-query";
import { useAxiosInstance } from "../api/axios";

export const useGetUserData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await useAxiosInstance.get(`/api/user/data`);
      return res.data.userData;
    },

    onSuccess: () => {
      console.log("Data  fetch ");
    },
  });
};

export const useGetUserAuth = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: () =>
      useAxiosInstance.get(`/api/auth/is-auth`).then((res) => res.data),
    onSuccess: () => {
      console.log("User authenticated");
    },
  });
};
