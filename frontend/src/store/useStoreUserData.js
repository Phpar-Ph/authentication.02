import { create } from "zustand";

const useStoreData = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export default useStoreData;
