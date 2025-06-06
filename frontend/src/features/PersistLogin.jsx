// import { useEffect, useRef } from "react";
// import { usePersist } from "../store/usePersistUserStore";
// import { useSetToken } from "../store/useTokenStore";

// import { axiosInstanceNoHeader } from "../lib/axiosInstance";
// import { API_ROUTES } from "../constants/apiRoutes";

import { Outlet } from "react-router";
const PersistLogin = () => {
  // const persist = usePersist();
  // const effectRan = useRef(false);
  // const token = useSetToken();

  // useEffect(() => {
  //   if (effectRan.current === true) {
  //     console.log("running", effectRan);
  //     const getRefreshToken = async () => {
  //       try {
  //         const { data } = await axiosInstanceNoHeader.get(
  //           API_ROUTES.AUTH.REFRESH
  //         );
  //         console.log("data", data.accessToken);
  //       } catch (err) {
  //         console.error("error fetching", err);
  //       }
  //     };
  //     if (!effectRan.current && persist && !token) {
  //       getRefreshToken();
  //       effectRan.current = true;
  //     }
  //   }
  //   return () => {
  //     effectRan.current = true;
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <Outlet />;
};

export default PersistLogin;
