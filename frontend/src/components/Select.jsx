import React from "react";

const Select = ({
  label,
  wrapperClass,
  id,
  name,
  options,
  onChange,
  placeHolder,
  className,
  value
}) => {
  return (
    <div className={`flex-col gap-1 w-full h-15`}>
      <label
        htmlFor={id}
        className="block text-sm font-subtitle font-semibold text-subtitle-text h-5"
      >
        {label}
      </label>
      <select
        autoComplete="off"
        className={`w-full h-10 px-3 py-2 font-paragraph-body outline-none border-0 ${className}`}
        id={id}
        onChange={onChange}
        // value={value}
        name={name}
      >
        <option value={placeHolder}>
          {placeHolder}
        </option>
        {options?.map((op) => (
          <option value={op.value}>{op.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
