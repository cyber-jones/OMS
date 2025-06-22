import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { oms_url } from "../utils/SD";

const Header = ({ sideNav, setSideNav }) => {
  const { loading, user } = useUser();

  return (
    <header className="static w-full h-1/12 bg-gray-100 flex justify-between items-center">
      <div className="w-[10%] px-2 flex gap-6 justify-start sm:justify-center items-center">
        <i
          className={`bi bi-list text-md rounded-md px-2 cursor-pointer sm:hidden block ${
            sideNav ? "border-3" : ""
          }`}
          onClick={() => setSideNav((prev) => !prev)}
        ></i>
        <p className="font-bold text-lg md:text-3xl">OMS</p>
      </div>
      <div className="flex-1">
        <p className="uppercase text-sm md:text-lg hidden md:block">welcome! <b className="text-blue-700">{user?.mln ? "Dr" : null } {user?.first_Name}</b></p>
      </div>
      <div className="min-w-[40%] md:min-w-[20%] h-full flex justify-end items-center gap-2">
        <p className="text-[10px] md:text-[15px] font-light">
          {!loading && user !== null
            ? `${user?.first_Name} ${user?.last_Name}`
            : "Loading..."}
        </p>
        <Link
          to={oms_url.profile}
          className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] rounded-full bg-black mr-3"
        >
          <img
            src={
              user?.profile_Url
                ? user?.profile_Url
                : user?.sex == "Male"
                ? "/images/profile-masculine.jpeg"
                : "/images/profile-femine.jpeg"
            }
            className="rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
