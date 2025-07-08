import { Link } from "react-router-dom";
import { oms_url, Roles } from "../utils/SD";
import { useAuth } from "../utils/isAuthorized";

const SideBar = ({ sideNav }) => {
  const nav_icons = "text-lg md:text-2xl hover:text-4xl transition-all ease-in";
  const isAuth = useAuth([Roles.DOCTOR, Roles.STAFF])

  return (
    <div
      className={`${
        sideNav
          ? "md:w-[10%] flex flex-col h-full justify-around items-center bg-gray-100 w-[80px] transition-all duration-700"
          : "w-[0px] h- scale-x-0 h-11/12 flex flex-col justify-around items-center bg-gray-100 text-[11px] transition-all duration-700"
      }`}
    >
      <Link to={oms_url.dashBoard}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-house-gear-fill ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Dashboard</div>
        </div>
      </Link>
      <Link to={oms_url.consultation}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-wechat ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Consultation</div>
        </div>
      </Link>
      
      <Link to={oms_url.appointments}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-building-check ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Appointments</div>
        </div>
      </Link>
      <Link hidden={!isAuth} to={oms_url.patients}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-people-fill ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Patients</div>
        </div>
      </Link>
      <Link to={oms_url.specialties}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-person-video3 ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Specialties</div>
        </div>
      </Link>
      <Link to={oms_url.drugs}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-bandaid-fill ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Drugs</div>
        </div>
      </Link>
      <Link to={oms_url.settings}>
        <div className="text-center w-full hover:cursor-pointer">
          <i className={`bi bi-gear-wide-connected ${nav_icons}`}></i>
          <div className="lg:text-[12px] text-[8px]">Settings</div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
