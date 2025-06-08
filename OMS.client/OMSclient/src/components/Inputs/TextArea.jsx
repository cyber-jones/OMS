import React from "react";

const TextArea = ({ name, label, handleChange }) => {
  return (
    <label htmlFor={name} className="w-1/2">
      <p className="font-medium">{label}:</p>
      <textarea
        id={name}
        onChange={(e) => handleChange(e)}
        className="w-full border-t-0 border-r-0 opacity-75 min-h-9 h-9 pt-2 focus:outline-0 px-2 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
      ></textarea>
    </label>
  );
};

export default TextArea;
