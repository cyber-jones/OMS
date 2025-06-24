import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { verifyAccess } from "../middlewares/verifyAccess.js";
import { deletePatient, getPatient, getPatients, imageUpload, postPatient, updatePatient } from '../controllers/patientController.js';
import upload from '../middlewares/multer.js';

const patientRouter = Router();




patientRouter.get("/all", verifyAccess, verifyRoles(ROLES), getPatients);
patientRouter.get("/:id", verifyAccess, verifyRoles(ROLES), getPatient);
patientRouter.post("/", postPatient);
patientRouter.put("/:id", verifyAccess, verifyRoles([ROLES[0], ROLES[3]]), updatePatient);
patientRouter.put("/image-upload/:id", verifyAccess, verifyRoles([ROLES[0], ROLES[3]]), upload.single("image_file"), imageUpload);
patientRouter.delete("/:id", verifyAccess, verifyRoles([ROLES[0]]), deletePatient);



export default patientRouter;