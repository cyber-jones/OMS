import { Router } from 'express'
import { approveAppointment, deleteAppointment, disapproveAppointment, getAllAppointments, getAppointmentById, getAppointmentsBydoctor_Id, getAppointmentsByPatientId, getAppointmentsBySpecialty_Id, postAppointment, updateAppointment } from '../controllers/appointmentController.js';
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
const appointmentRouter = Router();




appointmentRouter.get("/all", verifyRoles([ROLES[0]]), getAllAppointments);
appointmentRouter.get("/:id", verifyRoles(ROLES), getAppointmentById);
appointmentRouter.get("/doctor/all/:specialty_Id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentsBySpecialty_Id);
appointmentRouter.get("/doctor/all/:doctor_Id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentsBydoctor_Id);
appointmentRouter.get("/patient/all/:patient_Id", verifyRoles(ROLES[0], ROLES[3]), getAppointmentsByPatientId);
appointmentRouter.post("/", verifyRoles(ROLES[3]), postAppointment);
appointmentRouter.put("/", verifyRoles(ROLES), updateAppointment);
appointmentRouter.delete("/", verifyRoles(ROLES[0], ROLES[3]), deleteAppointment);
appointmentRouter.post("/approve/:id", verifyRoles(ROLES[1], ROLES[2]), approveAppointment);
appointmentRouter.post("/disapprove/:id", verifyRoles(ROLES[1], ROLES[2]), disapproveAppointment);





export default appointmentRouter;