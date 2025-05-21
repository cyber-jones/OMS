import { Router } from 'express'
import { deleteMessage, getAllMessages, getUserMessages, getUserPrivateMessages, postMessage } from '../controllers/messageController.js';
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
const messageRouter = Router();




messageRouter.get("/all", verifyRoles([ROLES[0]]), getAllMessages);
messageRouter.get("/user/:id", verifyRoles(ROLES), getUserMessages);
messageRouter.get("/user/private/:sender_Id/:reciever_Id", verifyRoles(ROLES), getUserPrivateMessages);
messageRouter.post("/", verifyRoles(ROLES), postMessage);
messageRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteMessage);





export default messageRouter;