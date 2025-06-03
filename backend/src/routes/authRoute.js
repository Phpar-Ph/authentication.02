import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  register,
  login,
  logout,
  isAuthenticated,
  handleRefresh,
} from "../controller/authController.js";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.get("/refresh", handleRefresh);

export default authRouter;
