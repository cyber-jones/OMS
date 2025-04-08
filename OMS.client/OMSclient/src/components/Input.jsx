

const Input = ({ type, name, handleChange }) => {

  return (
    <label htmlFor={name} className="w-1/2">
      <p className="font-medium">{name}:</p>
      <input
        id={name}
        type={type}
        onChange={(e) => handleChange(e)}
        className="w-full pt-2 focus:outline-0 px-1 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
      />
    </label>
  );
};

export default Input;

