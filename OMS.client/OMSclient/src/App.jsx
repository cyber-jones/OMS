import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { oms_url } from "./utils/SD"
import HomeContent from "./components/HomeContent"
import Specialization from "./components/Specialization"


function App() {

  return (
    <Routes>
        <Route path={oms_url.home} element={<Home><HomeContent /></Home>} />
        <Route path={oms_url.specialization} element={<Home><Specialization /></Home>} />
    </Routes>
  )
}

export default App
