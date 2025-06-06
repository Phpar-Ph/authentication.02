import { API_ROUTES } from "../../constants/apiRoutes";
import axiosInstance from "../../lib/axiosInstance";
import { axiosInstanceNoHeader } from "../../lib/axiosInstance";

export const getUserData = async () => {
  const response = await axiosInstance.get(API_ROUTES.USER.DATA);
  return response.data.userData;
};

export const loginUser = async (data) => {
  const response = await axiosInstanceNoHeader.post(API_ROUTES.AUTH.LOGIN, {
    email: data.email,
    password: data.password,
  });
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axiosInstanceNoHeader.post(API_ROUTES.AUTH.REGISTER, {
    name: data.name,
    email: data.email,
    password: data.password,
  });
  return response.data.accessToken;
};

export const logoutUser = async () => {
  const response = await axiosInstanceNoHeader.post(API_ROUTES.AUTH.LOGOUT);
  return response.data;
};

export const getUser = async () => {
  const response = await axiosInstance.get(API_ROUTES.USER.DATA);
  return response.data.user;
};
