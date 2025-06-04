import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useAxiosInstance } from "../api/axios";
import { useToken } from "../store/useTokenStore";
const baseURL = "http://localhost:5000";

export const useRefresh = () => {
  const token = useToken();

  return useQuery({
    queryKey: ["refresh"],
    queryFn: async () => {
      const response = await axios.get(`${baseURL}/api/auth/refresh`, {
        withCredentials: true,
      });
      token(response.data.accessToken);
      return response.data.accessToken;
    },
    enabled: false, // Prevent auto-fetching
    retry: false, // Disable retries on failure
    staleTime: Infinity, // Prevent auto-refresh
  });
};
