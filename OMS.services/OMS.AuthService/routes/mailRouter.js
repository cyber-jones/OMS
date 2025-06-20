import {Router} from 'express';
import { sendMail } from '../controllers/mailController.js';
const mailRouter = Router();




mailRouter.get("/send-mail", sendMail);





export default mailRouter;