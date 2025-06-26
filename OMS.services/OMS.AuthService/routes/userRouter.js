import { Router } from "express";
import { verifyAccess } from "../middlewares/verifyAccess.js";
import {
  forgetPassword,
  getUsers,
  loginUser,
  registerUser,
  resetPassword,
  updateEmail,
  verifyOTP,
} from "../controllers/userController.js";
import { verifyTokenAccess } from "../middlewares/verifyTokenAccess.js";
const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/all", verifyAccess, getUsers);
userRouter.get("/make-admin/:id", verifyAccess, getUsers);
userRouter.put("/update/email", verifyAccess, updateEmail);
userRouter.post("/forget-password", forgetPassword);
userRouter.post("/verify-otp", verifyTokenAccess, verifyOTP);
userRouter.post("/reset-password", verifyTokenAccess, resetPassword);

export default userRouter;
