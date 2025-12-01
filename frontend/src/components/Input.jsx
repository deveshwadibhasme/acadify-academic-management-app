const Input = ({
  type,
  className,
  id,
  placeholder,
  onChange,
  value,
  label,
  name,
  maxLimit,
  hidden,
  wrapperClass
}) => {
  return (
    <div className={`flex-col gap-1 w-full h-15 ${hidden ? 'hidden' : 'flex'} ${wrapperClass}`}>
      <label
        htmlFor={id}
        className="block text-sm font-subtitle font-semibold text-subtitle-text h-5"
      >
        {label}
      </label>
      <input
        type={type}
        autoComplete="off"
        maxLength={maxLimit}
        className={
          type === "checkbox"
            ? className
            : `w-full h-10 px-3 py-2 font-paragraph-body outline-none border-0 ${className}`
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
