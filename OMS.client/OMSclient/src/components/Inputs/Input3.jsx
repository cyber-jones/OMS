const Input3 = ({ type, name, label, handleChange, value }) => {
  return (
    <label htmlFor={name} className="w-full">
      <p className="font-medium">{label}:</p>
      <input
        required
        id={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
      />
    </label>
  );
};

export default Input3;
