import { Router } from 'express'
import { approveAppointment, deleteAppointment, disapproveAppointment, getAppointmentById, getAppointments, getAppointmentsBydoctor_Id, postAppointment, updateAppointment } from '../controllers/appointmentController';
import { verifyRoles } from '../middlewares/verifyRoles';
import { ROLES } from '../utils/SD';
const appointmentRouter = Router();




appointmentRouter.get("/all", verifyRoles([ROLES[0]]), getAppointments);
appointmentRouter.get("/:id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentById);
appointmentRouter.get("/doctor/all/:doctor_Id", verifyRoles([ROLES[0], ROLES[1], ROLES[2]]), getAppointmentsBydoctor_Id);
appointmentRouter.get("/patient/all/:patient_Id", verifyRoles(ROLES[0], ROLES[3]), getAppointments);
appointmentRouter.post("/", verifyRoles(ROLES[3]), postAppointment);
appointmentRouter.put("/", verifyRoles(ROLES), updateAppointment);
appointmentRouter.delete("/", verifyRoles(ROLES[0], ROLES[3]), deleteAppointment);
appointmentRouter.post("/approve/:id", verifyRoles(ROLES[1], ROLES[2]), approveAppointment);
appointmentRouter.post("/disapprove/:id", verifyRoles(ROLES[1], ROLES[2]), disapproveAppointment);





export default appointmentRouter;