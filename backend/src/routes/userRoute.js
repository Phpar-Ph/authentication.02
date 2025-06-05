import express from "express";
// import userAuth from "../middleware/userAuth.js";
import { getUserData } from "../controller/userController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const userRouter = express.Router();

userRouter.use(verifyJWT);

userRouter.get("/data", getUserData);

export default userRouter;
