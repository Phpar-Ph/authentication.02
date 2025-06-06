import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import { API_ROUTES } from "../constants/apiRoutes";

export const useGetUserData = () => {
  const axiosPrivate = useAxiosPrivate();
  const getUser = async () => {
    const response = await axiosPrivate.get(API_ROUTES.USER.DATA);
    return response.data.user;
  };
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });
};
