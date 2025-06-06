import { BASEURL } from "../constants/baseUrl";
import axios from "axios";
import { useStoreToken } from "../store/useTokenStore";
const { setAccessToken } = useStoreToken.getState();
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
  const token = useStoreToken.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Response error status:", error.response?.status);
    const setToken = setAccessToken;
    const originalRequest = error.config;
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("Attempting token refresh...");
      try {
        const response = await axios.get(`${BASEURL}/api/auth/refresh`, {
          withCredentials: true,
        });
        const newToken = response.data.accessToken;
        setToken(newToken);
        console.log("New token received:", newToken);
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
