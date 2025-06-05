import { useEffect, useRef } from "react";
import { usePersist } from "../store/usePersistUserStore";
// import { useToken } from "../store/useTokenStore";
// import { useRefresh } from "../hook/useRefresh";
// import { useQuery } from "@tanstack/react-query";
import { useSetToken } from "../store/useTokenStore";
// import { useSetUserData } from "../store/useStoreUserData";
import axios from "axios";
import { Outlet } from "react-router";
const PersistLogin = () => {
  const persist = usePersist();
  const effectRan = useRef(false);
  const token = useSetToken();
  // const accessTOken = useToken();
  const baseURL = "http://localhost:5000";

  // const { data } = useQuery({
  //   queryKey: ["refresh"],
  //   queryFn: useRefresh,
  //   onSuccess: () => {
  //     console.log("refresh");
  //   },
  //   enabled: false,
  //   retry: false,
  //   staleTime: Infinity,
  // });

  useEffect(() => {
    if (effectRan.current === true || persist === true) {
      const verifyRefresh = async () => {
        console.log("verifying refresh token");
        try {
          const response = await axios.get(`${baseURL}/api/auth/refresh`, {
            withCredentials: true,
          });
          token(response.data.accessToken);
          return response.data.accessToken;
        } catch (err) {
          console.error(err);
        }
      };
      if (!token && persist) verifyRefresh();
    }

    return () => {
      effectRan.current = true;
      console.log("Ref clean up", effectRan);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default PersistLogin;
