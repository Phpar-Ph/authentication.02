import { Outlet } from "react-router";
import { useEffect } from "react";
import { queryClient } from "../main";
import { API_ROUTES } from "../constants/apiRoutes";
import axiosPrivate from "../api/axiosPrivate";

const Prefetch = () => {
    useEffect(() => {
      queryClient.prefetchQuery({
        queryKey: ["userData"],
        queryFn: async () => {
          const res = axiosPrivate.get(API_ROUTES.USER.DATA);
          return res.data.userData;
        },
      });
    }, []);

  return <Outlet />;
};

export default Prefetch;
