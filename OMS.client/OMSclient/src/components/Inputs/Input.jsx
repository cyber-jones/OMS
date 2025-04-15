const Input = ({ type, name, label, handleChange, width = "w-1/2" }) => {
  return (
    <label htmlFor={name} className={width}>
      <p className="font-medium">{label}:</p>
      <input
        id={name}
        type={type}
        onChange={(e) => handleChange(e)}
        className="w-full opacity-75 pt-2 focus:outline-0 px-2 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
      />
    </label>
  );
};

export default Input;
