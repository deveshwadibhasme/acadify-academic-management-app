

const Input = ({ type, className, id, placeholder, onChange, value, label,name }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-subtitle-text"
      >
        {label}
      </label>
      <input
        type={type}
        className={
          type === "checkbox"
            ? className
            : `w-full h-10 px-3 py-2 outline-none border-0 ${className}`
        }
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        
      ></input>
    </div>
  );
};

export default Input;
