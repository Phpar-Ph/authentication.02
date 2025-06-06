import { useQuery } from "@tanstack/react-query";

import { API_ROUTES } from "../constants/apiRoutes";
import { useSetToken } from "../store/useTokenStore";
import { axiosInstanceNoHeader } from "../lib/axiosInstance";

const refreshToken = async () => {
  const response = await axiosInstanceNoHeader.get(API_ROUTES.AUTH.REFRESH);
  return response.data.accessToken;
};

export const useRefresh = () => {
  const token = useSetToken();
  return useQuery({
    queryKey: ["refresh"],
    queryFn: refreshToken,
    onSuccess: (data) => {
      token(data);
      console.log("refresh", token);
    },
    enabled: false, // Prevent auto-fetching
    retry: false, // Disable retries on failure
    staleTime: Infinity, // Prevent auto-refresh
  });
};
