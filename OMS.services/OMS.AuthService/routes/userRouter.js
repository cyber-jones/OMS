import {Router} from 'express'
import { loginUSer, registerUser } from '../controllers/userController.js';
const userRouter = Router();




userRouter.post("/register", registerUser);
userRouter.post("/login", loginUSer);





export default userRouter;