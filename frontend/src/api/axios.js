import axios from "axios";
import { useToken } from "../store/useTokenStore";

const baseURL = "http://localhost:5000";

export const useAxiosInstance = () => {
  const token = useToken();
  return axios.create({
    baseURL,
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
};
