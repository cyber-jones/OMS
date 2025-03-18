import {Router} from 'express';
import { getRefresh } from '../controllers/refreshController.js';
const refreshRouter = Router();




refreshRouter.get("/refresh", getRefresh);





export default refreshRouter;