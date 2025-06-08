import { Router } from 'express'
import { approveAppointment, cancleAppointment, deleteAppointment, disapproveAppointment, getAllAppointments, getAppointmentById, getAppointmentsByDoctor_Id, getAppointmentsByPatient_Id, getAppointmentsBySpecialty_Id, postAppointment, updateAppointment } from '../controllers/appointmentController.js';
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
const appointmentRouter = Router();




appointmentRouter.get("/all", verifyRoles([ROLES[0]]), getAllAppointments);
appointmentRouter.get("/:id", verifyRoles(ROLES), getAppointmentById);
appointmentRouter.get("/doctor/all/:specialty_Id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentsBySpecialty_Id);
appointmentRouter.get("/doctor/all/:doctor_Id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentsByDoctor_Id);
appointmentRouter.get("/patient/all/:patient_Id", verifyRoles(ROLES), getAppointmentsByPatient_Id);
appointmentRouter.post("/", verifyRoles([ROLES[0], ROLES[3]]), postAppointment);
appointmentRouter.put("/:id", verifyRoles(ROLES), updateAppointment);
appointmentRouter.delete("/:id", verifyRoles([ROLES[0], ROLES[3]]), deleteAppointment);
appointmentRouter.post("/approve/:id", verifyRoles([ROLES[1], ROLES[2]]), approveAppointment);
appointmentRouter.post("/disapprove/:id", verifyRoles([ROLES[1], ROLES[2]]), disapproveAppointment);
appointmentRouter.post("/cancle/:id", verifyRoles([ROLES[3]]), cancleAppointment);





export default appointmentRouter;