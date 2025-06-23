import {Router} from 'express'
import { verifyAccess } from "../middlewares/verifyAccess.js"
import { getUsers, loginUser, registerUser } from '../controllers/userController.js';
const userRouter = Router();




userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/all", verifyAccess, getUsers);
userRouter.get("/make-admin/:id", verifyAccess, getUsers);





export default userRouter;