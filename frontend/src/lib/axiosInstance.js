import { BASEURL } from "../constants/baseUrl";
import axios from "axios";
import { useStoreToken } from "../store/useTokenStore";



const axiosInstance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceNoHeader = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = useStoreToken((state) => state.accessToken);
  console.log("TOKEN", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("TOKEN", token);
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const setToken = useStoreToken((state) => state.setAccessToken);
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axiosInstanceNoHeader.get("/api/auth/refresh");
        const newToken = response.data.accessToken;
        setToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        console.log("fetching new token");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        setToken(null);
        console.log("error refresh ");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
