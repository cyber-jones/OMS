import {Router} from 'express';
import { getLog, getRefresh } from '../controllers/refreshController.js';
const refreshRouter = Router();




refreshRouter.get("/refresh", getRefresh);
refreshRouter.get("/logs", getLog);





export default refreshRouter;