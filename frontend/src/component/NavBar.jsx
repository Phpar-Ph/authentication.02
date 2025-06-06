import React from "react";
import { useLogout } from "../hook/useAuth";

function NavBar() {
  const { mutate: logout } = useLogout();

  return (
    <div>
      <button
        onClick={() => logout()}
        className="bg-blue-500 text-amber-50 font-bold text-2xl p-4 rounded-2xl hover:cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default NavBar;
