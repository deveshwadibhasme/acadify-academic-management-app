

const Input = ({ type, className, id, placeholder, onChange, value, label }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        className={
          type === "checkbox"
            ? className
            : `w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 ${className}`
        }
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
