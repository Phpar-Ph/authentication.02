import express from "express";
import { getUserData } from "../controller/userController.js";
import verifyJWT from "../middleware/verifyJWT.js";
import userAuth from "../middleware/userAuth.js";
const userRouter = express.Router();

userRouter.get("/data", verifyJWT, getUserData);

export default userRouter;
