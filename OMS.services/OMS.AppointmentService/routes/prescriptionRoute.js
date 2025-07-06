import { Router } from 'express'
import { approvePrescription, deletePrescription, disapprovePrescription, getPatientPrescriptions, getPrescription, getPrescriptions, postPrescription, updatePrescription } from '../controllers/prescriptionController.js';
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
const prescriptionRouter = Router();




prescriptionRouter.get("/all", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getPrescriptions);
prescriptionRouter.get("/:id", verifyRoles(ROLES), getPrescription);
prescriptionRouter.get("/patient/:id", verifyRoles(ROLES), getPatientPrescriptions);
prescriptionRouter.post("/:doctorId/:patientId", verifyRoles([ROLES[1]]), postPrescription);
prescriptionRouter.put("/:id", verifyRoles([ROLES[1]]), updatePrescription);
prescriptionRouter.delete("/:id", verifyRoles([ROLES[0], ROLES[1]]), deletePrescription);
prescriptionRouter.post("/approve/:id", verifyRoles([ROLES[1], ROLES[2]]), approvePrescription);
prescriptionRouter.post("/disapprove/:id", verifyRoles([ROLES[1], ROLES[2]]), disapprovePrescription);





export default prescriptionRouter;