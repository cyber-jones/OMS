import Chat from "../components/consultation/Chat";
import Users from "../components/consultation/Users";

const Consultation = () => {
  return (
    <div className="w-full md:w-11/12 h-full md:h-11/12 flex md:shadow-2xl">
      <Users />
      <Chat />
    </div>
  );
};

export default Consultation;
