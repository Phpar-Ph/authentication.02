import SignIn from "./page/SignIn";
import { Route, Routes } from "react-router";
import Register from "./page/Register";
import Home from "./page/Home";
import Layout from "./component/Layout";
import Public from "./component/Public";
import PersistLogin from "./features/PersistLogin";
import Prefetch from "./features/Prefetch";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
