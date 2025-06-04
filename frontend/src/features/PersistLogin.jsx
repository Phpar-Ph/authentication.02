import React, { useEffect, useRef } from "react";
import { usePersist } from "../store/usePersistUserStore";
import { useToken } from "../store/useTokenStore";
import { useRefresh } from "../hook/useRefresh";
import { Outlet } from "react-router";
const PersistLogin = () => {
  const persist = usePersist();
  const effectRan = useRef(false);
  const token = useToken();
  const { refetch: refresh } = useRefresh();
  useEffect(() => {
    if (effectRan.current === true) {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default PersistLogin;
