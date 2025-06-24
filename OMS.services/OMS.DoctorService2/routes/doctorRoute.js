import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { deleteDoctor, getDoctors, getDoctor, postDoctor, updateDoctor, imageUpload } from '../controllers/doctorController.js';
import upload from '../middlewares/multer.js';
const doctorRouter = Router();




doctorRouter.get("/all", verifyRoles(ROLES), getDoctors);
doctorRouter.get("/:id", verifyRoles(ROLES), getDoctor);
doctorRouter.post("/", verifyRoles([ROLES[0]]), postDoctor);
doctorRouter.put("/:id", verifyRoles([ROLES[0], ROLES[1]]), updateDoctor);
doctorRouter.put("/image-upload/:id", verifyRoles([ROLES[0], ROLES[1]]), upload.single("image_file"), imageUpload);
doctorRouter.delete("/:id", verifyRoles([ROLES[0]]), deleteDoctor);





export default doctorRouter;