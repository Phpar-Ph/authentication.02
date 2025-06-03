import { create } from "zustand";

const useStoreToken = create((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => ({
    accessToken: null,
  }),
}));

export const useToken = () => useStoreToken((state) => state.accessToken);
export const useSetToken = () => useStoreToken((state) => state.setAccessToken);
export const useClearToken = () =>
  useStoreToken((state) => state.clearAccessToken);
