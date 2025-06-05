import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../features/auth/api";
export const useGetUserData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
    onSuccess: () => {
      console.log("SUCCESS");
    },
  });
};

//   const authQuery = useQuery({
//     queryKey: ["authStatus"],
//     queryFn: async () => {
//       const res = await axios.get(`/api/auth/is-auth`, {
//         withCredentials: true,
//       });
//       return res.data;
//     },
//   });

//   const userDataQuery = useQuery({
//     queryKey: ["userData"],
//     queryFn: async () => {
//       const { data } = await axiosInstance.get(`/api/user/data`);
//       return data.userData;
//     },
//     enabled: !!authQuery.data?.success,
//   });
//   return {
//     userDataQuery,
//   };
// };
