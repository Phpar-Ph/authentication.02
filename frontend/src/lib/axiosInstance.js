import { BASEURL } from "../constants/baseUrl";
import axios from "axios";
import { useToken } from "../store/useTokenStore";
import { useSetToken } from "../store/useTokenStore";

const axiosInstance = axios.create({
  BASEURL,
  withCredentials: true,
});

export const axiosInstanceNoHeader = axios.create({
  BASEURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = useToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const setToken = useSetToken();
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axiosInstance.get("/api/auth/refresh");
        const newToken = response.data.accessToken;
        setToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        setToken(null);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
