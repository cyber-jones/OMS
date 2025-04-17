import React from "react";

const SpecialtyForm = ({ handleSubmit, name, handleChange, loading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans"
    >
      <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8">
        Create New {name}
      </h1>
      <label htmlFor="Name" className="w-11/12 md:w-6/12">
        <p className="font-semibold">{name} Name:</p>
        <input
          id="Name"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Description" className="w-11/12 md:w-6/12">
        <p className="font-semibold">{name} Description:</p>
        <textarea
          id="Description"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full max-h-46 min-h-36 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        ></textarea>
      </label>
      <div className="w-11/12 md:w-6/12">
        {loading ? (
          <button
            disabled={loading}
            className="md:w-5/12 w-full py-4 bg-yellow-950 rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer"
          >
            Loading...
          </button>
        ) : (
          <button className="md:w-5/12 w-full py-4 bg-green-900 hover:bg-green-950 rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
            Create
          </button>
        )}
      </div>
    </form>
  );
};

export default SpecialtyForm;
