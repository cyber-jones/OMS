import { Router } from 'express'
import { deleteMessage, getAllMessages, getUserMessages, postMessage } from '../controllers/messageController.js';
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
const messageRouter = Router();




messageRouter.get("/all", verifyRoles([ROLES[0]]), getAllMessages);
messageRouter.get("/user/:sender_Id/:reciever_Id", verifyRoles(ROLES), getUserMessages);
messageRouter.post("/", verifyRoles(ROLES), postMessage);
messageRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteMessage);





export default messageRouter;