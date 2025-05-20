import { Router } from 'express'
import { approvePrescription, deletePrescription, disapprovePrescription, getPrescriptions, postPrescription, updatePrescription } from '../controllers/prescriptionController';
import { verifyRoles } from '../middlewares/verifyRoles';
import { ROLES } from '../utils/SD';
const prescriptionRouter = Router();




prescriptionRouter.get("/all", verifyRoles([ROLES[0]]), getPrescriptions);
prescriptionRouter.post("/", verifyRoles([ROLES[1]]), postPrescription);
prescriptionRouter.put("/:id", verifyRoles([ROLES[1]]), updatePrescription);
prescriptionRouter.delete("/:id", verifyRoles([ROLES[0], ROLES[1]]), deletePrescription);
prescriptionRouter.post("/approve/:id", verifyRoles([ROLES[1], ROLES[2]]), approvePrescription);
prescriptionRouter.post("/disapprove/:id", verifyRoles([ROLES[1], ROLES[2]]), disapprovePrescription);





export default prescriptionRouter;