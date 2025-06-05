import SignIn from "./page/SignIn";
import { Route, Routes } from "react-router";
import Register from "./page/Register";
import Home from "./page/Home";
import Layout from "./component/Layout";
import Public from "./component/Public";
import PersistLogin from "./features/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PersistLogin />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
