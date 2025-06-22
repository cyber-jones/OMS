import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { deleteStaff, getStaff, getStaffs, postStaff, updateStaff } from '../controllers/staffController.js';

const staffRouter = Router();




staffRouter.get("/all", verifyRoles(ROLES), getStaffs);
staffRouter.get("/:id", verifyRoles(ROLES), getStaff);
staffRouter.post("/", verifyRoles([ROLES[0]]), postStaff);
staffRouter.put("/:id", verifyRoles([ROLES[0], ROLES[2]]), updateStaff);
staffRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteStaff);





export default staffRouter;