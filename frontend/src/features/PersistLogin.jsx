// import { useEffect, useRef } from "react";
// import { usePersist } from "../store/usePersistUserStore";
// import { useStoreToken } from "../store/useTokenStore";

// import { axiosInstanceNoHeader } from "../lib/axiosInstance";
// import { API_ROUTES } from "../constants/apiRoutes";

import { Outlet } from "react-router";
const PersistLogin = () => {
  // const persist = usePersist();
  // // const effectRan = useRef(false);
  // const token = useStoreToken((state) => state.setAccessToken);

  // useEffect(() => {
  //   const getRefreshToken = async () => {
  //     try {
  //       const { data } = await axiosInstanceNoHeader.get(
  //         API_ROUTES.AUTH.REFRESH
  //       );
  //       console.log("data", data.accessToken);
  //       token(data.accessToken);
  //     } catch (err) {
  //       console.error("error fetching", err);
  //     }
  //   };
  //   if (!token && persist) {
  //     getRefreshToken();
  //   }

  // if (effectRan.current === false) {
  //   console.log("running", effectRan);
  //   const getRefreshToken = async () => {
  //     try {
  //       const { data } = await axiosInstanceNoHeader.get(
  //         API_ROUTES.AUTH.REFRESH
  //       );
  //       console.log("data", data.accessToken);
  //     } catch (err) {
  //       console.error("error fetching", err);
  //     }
  //   };
  //   if (!token && persist) {
  //     getRefreshToken();
  //   }
  // }
  // return () => {
  //   effectRan.current = true;
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <Outlet />;
};

export default PersistLogin;
