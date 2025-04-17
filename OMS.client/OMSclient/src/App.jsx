import { Route, Routes } from "react-router-dom";
import DashBoardComponents from "./components/DashBoardComponents";
import { oms_url, Roles } from "./utils/SD";
import DashBoardContent from "./pages/DashBoard";
import Specialty from "./pages/specialty/Specialty";
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

function App() {
  return (
    <Routes>
      <Route element={<IsAuth role={Roles.PATIENT}/>}>
        <Route
          path={oms_url.dashBoard}
          element={
            <DashBoardComponents>
              <DashBoardContent />
            </DashBoardComponents>
          }
        />
        <Route
          path={oms_url.specialty}
          element={
            <DashBoardComponents>
              <Specialty />
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
          path={oms_url.drug}
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
              <DetailedSpecialty />
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
          path={oms_url.registerDoctor}
          element={
            <DashBoardComponents>
              <RegisterDoctor />
            </DashBoardComponents>
          }
        />
      </Route>
      <Route element={<IsAuth role={Roles.ADMIN}/>}>
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
      </Route>
      <Route path={oms_url.auth} element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
