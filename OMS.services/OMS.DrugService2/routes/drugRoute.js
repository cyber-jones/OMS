import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { deleteDrug, getDrugs, postDrug, updateDrug } from '../controllers/dugController.js';
const drugRouter = Router();




drugRouter.get("/all", verifyRoles([ROLES]), getDrugs);
drugRouter.post("/", verifyRoles([ROLES[0]]), postDrug);
drugRouter.put("/:id", verifyRoles([ROLES[0]]), updateDrug);
drugRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteDrug);





export default drugRouter;