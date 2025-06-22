import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { deleteSpecialty, getSpecialty, getSpecialties, postSpecialty, updateSpecialty } from '../controllers/specialtyController.js';
const specialtyRouter = Router();




specialtyRouter.get("/all", verifyRoles([ROLES]), getSpecialties);
specialtyRouter.get("/:id", verifyRoles([ROLES]), getSpecialty);
specialtyRouter.post("/", verifyRoles([ROLES[0]]), postSpecialty);
specialtyRouter.put("/:id", verifyRoles([ROLES[0]]), updateSpecialty);
specialtyRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteSpecialty);





export default specialtyRouter;