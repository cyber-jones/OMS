import { Route, Routes } from "react-router-dom";
import DashBoardComponents from "./components/DashBoardComponents";
import { oms_url, Roles } from "./utils/SD";
import DashBoardContent from "./pages/DashBoard";
import Specialties from "./pages/specialty/Specialties";
import DetailedSpecialty from "./pages/specialty/DetailedSpecialty";
import Consultation from "./pages/Consultation";
import Auth from "./pages/Auth";
import IsAuth from "./components/authorize/IsAuth";
import Drugs from "./pages/drugs/Drugs";
import Settings from "./pages/settings/Settings";
import RegisterDoctor from "./pages/settings/register/RegisterDoctor";
import NotFound from "./pages/NotFound";
import RegisterStaff from "./pages/settings/register/RegisterStaff";
import RegisterSpecialty from "./pages/settings/register/RegisterSpecialty";
import RegisterDrug from "./pages/settings/register/RegisterDrug";
import DetailedDrug from "./pages/drugs/DetailedDrug";
import DoctorList from "./pages/settings/list/DoctorList";
import UpdateDoctor from "./pages/settings/update/UpdateDoctor";
import PatientList from "./pages/settings/list/PatientList";
import UpdateStaff from "./pages/settings/update/UpdateStaff";
import UpdatePatient from "./pages/settings/update/UpdatePatient";
import StaffList from "./pages/settings/list/StaffList";
import DrugList from "./pages/settings/list/DrugList";
import UpdateDrug from "./pages/settings/update/UpdateDrug";
import SpecialtyList from "./pages/settings/list/SpecialtyList";
import UpdateSpecialty from "./pages/settings/update/UpdateSpecialty";
import IsLoggedIn from "./components/authorize/IsLoggedIn";
import NewAppointment from "./pages/appointment/NewAppointment";
import Appointments from "./pages/appointment/Appointments";
import Appointment from "./pages/appointment/Appointment";
import Profile from "./pages/Profile";
import DoctorProfile from "./pages/settings/profile/DoctorProfile";
import StaffProfile from "./pages/settings/profile/StaffProfile";
import PatientProfile from "./pages/settings/profile/PatientProfile";
import UpdateAppointment from "./pages/appointment/UpdateAppointment";
import Patients from "./pages/patients/Patients";
import PatientAction from "./pages/patients/PatientAction";
import NewPrescription from "./pages/prescription/NewPrescription";

function App() {
  return (
    <Routes>
      <Route element={<IsAuth roles={[]} />}>
        <Route
          path={oms_url.profile}
          element={
            <DashBoardComponents>
              <Profile />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.dashBoard}
          element={
            <DashBoardComponents>
              <DashBoardContent />
            </DashBoardComponents>
          }
        />
        <Route element={<IsAuth roles={[Roles.DOCTOR]} />}>
          <Route
            path={oms_url.newPrescription+"/:id"}
            element={
              <DashBoardComponents>
                <NewPrescription />
              </DashBoardComponents>
            }
          />
        </Route>
        <Route element={<IsAuth roles={[Roles.DOCTOR, Roles.STAFF]} />}>
          <Route
            path={oms_url.patients}
            element={
              <DashBoardComponents>
                <Patients />
              </DashBoardComponents>
            }
          />
          <Route
            path={oms_url.patient+"/action/:id"}
            element={
              <DashBoardComponents>
                <PatientAction />
              </DashBoardComponents>
            }
          />
        </Route>
        <Route
          path={oms_url.specialties}
          element={
            <DashBoardComponents>
              <Specialties />
            </DashBoardComponents>
          }
        />
        <Route
          path={`${oms_url.specialty}/:id`}
          element={
            <DashBoardComponents>
              <DetailedSpecialty />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.consultation}
          element={
            <DashBoardComponents>
              <Consultation />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.appointments}
          element={
            <DashBoardComponents>
              <Appointments />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updateAppointment + "/:id"}
          element={
            <DashBoardComponents>
              <UpdateAppointment />
            </DashBoardComponents>
          }
        />
        <Route
          path={`${oms_url.appointment}/:id`}
          element={
            <DashBoardComponents>
              <Appointment />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.newAppointment}
          element={
            <DashBoardComponents>
              <NewAppointment />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.drugs}
          element={
            <DashBoardComponents>
              <Drugs />
            </DashBoardComponents>
          }
        />
        <Route
          path={`${oms_url.drug}/:id`}
          element={
            <DashBoardComponents>
              <DetailedDrug />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.settings}
          element={
            <DashBoardComponents>
              <Settings />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updateDoctor + "/:id"}
          element={
            <DashBoardComponents>
              <UpdateDoctor />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updatePatient + "/:id"}
          element={
            <DashBoardComponents>
              <UpdatePatient />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updateStaff + "/:id"}
          element={
            <DashBoardComponents>
              <UpdateStaff />
            </DashBoardComponents>
          }
        />
      </Route>
      <Route
        element={<IsAuth roles={[Roles.ADMIN, Roles.DOCTOR, Roles.STAFF]} />}
      >
        <Route
          path={oms_url.patientList}
          element={
            <DashBoardComponents>
              <PatientList />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.profile + "/patient/:id"}
          element={
            <DashBoardComponents>
              <PatientProfile />
            </DashBoardComponents>
          }
        />
      </Route>
      <Route element={<IsAuth roles={[Roles.ADMIN]} />}>
        <Route
          path={oms_url.registerDoctor}
          element={
            <DashBoardComponents>
              <RegisterDoctor />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.registerStaff}
          element={
            <DashBoardComponents>
              <RegisterStaff />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.registerSpecialty}
          element={
            <DashBoardComponents>
              <RegisterSpecialty />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.registerDrug}
          element={
            <DashBoardComponents>
              <RegisterDrug />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.doctorList}
          element={
            <DashBoardComponents>
              <DoctorList />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.staffList}
          element={
            <DashBoardComponents>
              <StaffList />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.drugList}
          element={
            <DashBoardComponents>
              <DrugList />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updateDrug + "/:id"}
          element={
            <DashBoardComponents>
              <UpdateDrug />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.specialtyList}
          element={
            <DashBoardComponents>
              <SpecialtyList />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.appointmentList}
          element={
            <DashBoardComponents>
              <Appointments />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.updateSpecialty + "/:id"}
          element={
            <DashBoardComponents>
              <UpdateSpecialty />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.profile + "/doctor/:id"}
          element={
            <DashBoardComponents>
              <DoctorProfile />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.profile + "/staff/:id"}
          element={
            <DashBoardComponents>
              <StaffProfile />
            </DashBoardComponents>
          }
        />
      </Route>
      <Route element={<IsLoggedIn />}>
        <Route path={oms_url.auth} element={<Auth />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
