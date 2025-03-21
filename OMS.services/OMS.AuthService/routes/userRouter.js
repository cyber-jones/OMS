import {Router} from 'express'
import { getUsers, loginUser, registerUser } from '../controllers/userController.js';
const userRouter = Router();




userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/all", getUsers);





export default userRouter;