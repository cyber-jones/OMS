import { Route, Routes } from "react-router-dom"
import DashBoardComponents from "./components/DashBoardComponents"
import { oms_url } from "./utils/SD"
import DashBoardContent from "./pages/DashBoard"
import Specialty from "./pages/specialty/Specialty"
import DetailedSpecialty from "./pages/specialty/DetailedSpecialty"
import Consultation from "./pages/Consultation"
import Auth from "./pages/Auth"


function App() {


  return (
    <Routes>
        <Route path={oms_url.dashBoard} element={<DashBoardComponents><DashBoardContent /></DashBoardComponents>} />
        <Route path={oms_url.specialty} element={<DashBoardComponents><Specialty /></DashBoardComponents>} />
        <Route path={`${oms_url.deatiledDSecialty}/:id`} element={<DashBoardComponents><DetailedSpecialty /></DashBoardComponents>} />
        <Route path={oms_url.consultation} element={<DashBoardComponents><Consultation /></DashBoardComponents>} />
        <Route path={oms_url.auth} element={<Auth />} />
    </Routes>
  )
}

export default App
