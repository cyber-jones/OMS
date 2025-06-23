import { useNavigate, useParams } from "react-router-dom";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import { useSnackbar } from "notistack";
import { useState } from "react";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_production_url, oms_url, Roles } from "../../utils/SD";
import { useAuth } from "../../utils/isAuthorized";

const DetailedSpecialty = () => {
  const { id } = useParams();
  const { loading: loadingSpecialty, specialties: specialty } =
    useSpecialty(id);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.doctor);
  const navigate = useNavigate();
  const isNotAdmin = useAuth([Roles.ADMIN]); 

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.delete("/specialty/" + id);
      if (res && res?.status !== 200)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "warning",
        });

      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate(oms_url.specialties);
    } catch (err) {
      enqueueSnackbar(err.response?.data.message || err.response.statusText, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loadingSpecialty && specialty ? (
        <div className="w-[90%] md:w-[50%] p-7 md:p-20 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            {specialty?.name}
          </h1>
          <p className="font-sans">{specialty?.description}</p>
          {!loading ? (
            <button
              hidden={!isNotAdmin}
              onClick={handleDelete}
              className="px-3 py-1 bg-red-500 text-white hover:bg-red-800 rounded-lg mt-3 float-right cursor-pointer"
            >
              Delete
            </button>
          ) : (
            <button
              hidden={!isNotAdmin}
              disabled={loading}
              className="px-3 py-1 bg-red-500 text-white hover:bg-red-800 rounded-lg mt-3 float-right cursor-pointer"
            >
              Deleting...
            </button>
          )}
        </div>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default DetailedSpecialty;
