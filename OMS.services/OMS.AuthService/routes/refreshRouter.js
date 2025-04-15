import {Router} from 'express';
import { getRefresh } from '../controllers/refreshController.js';
import { verifyAccess } from '../middlewares/verifyAccess.js';
const refreshRouter = Router();




refreshRouter.get("/refresh", verifyAccess, getRefresh);





export default refreshRouter;