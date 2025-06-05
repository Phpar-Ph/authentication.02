import { API_ROUTES } from "../../constants/apiRoutes";
import axiosInstance from "../../api/axios";
import axiosInstanceNoHeader from "../../lib/axiosInstance";

export const getUserData = async () => {
  const response = await axiosInstance.get(API_ROUTES.USER.DATA);
  return response.data.userData;
};

export const login = async () => {
  const response = await axiosInstanceNoHeader.post(API_ROUTES.AUTH.LOGIN);
  return response.data.accessToken;
};

export const register = async () => {
  const response = await axiosInstanceNoHeader.post(API_ROUTES.AUTH.REGISTER);
  return response.data.accessToken;
};

export const refreshToken = async () => {
  const response = await axiosInstance.get(API_ROUTES.AUTH.REFRESH);
  return response.data.accessToken;
};

export const logout = async () => {
  const response = await axiosInstance.get(API_ROUTES.AUTH.LOGOUT);
  return response.data;
};
