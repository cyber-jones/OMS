import {Router} from 'express';
import { sendMail } from '../controllers/mailController';
const mailRouter = Router();




mailRouter.get("/send-mail", sendMail);





export default mailRouter;