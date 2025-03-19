import {Router} from 'express'
import { getUsers, loginUSer, registerUser } from '../controllers/userController.js';
const userRouter = Router();




userRouter.post("/register", registerUser);
userRouter.post("/login", loginUSer);
userRouter.get("/all", getUsers);





export default userRouter;