import { useQuery } from "@tanstack/react-query";
import { getUser } from "../features/auth/api";

export const useGetUserData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
    onSuccess: (data) => {
      console.log("SUCCESS", data);
    },
  });
};
