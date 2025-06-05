import { useQuery } from "@tanstack/react-query";
import { refreshToken } from "../features/auth/api";

export const useRefresh = () => {
  return useQuery({
    queryKey: ["refresh"],
    queryFn: refreshToken,
    onSuccess: () => {
      console.log("refresh");
    },
    enabled: false, // Prevent auto-fetching
    retry: false, // Disable retries on failure
    staleTime: Infinity, // Prevent auto-refresh
  });
};
