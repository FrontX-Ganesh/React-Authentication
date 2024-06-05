/* eslint-disable no-unused-vars */
import React from "react";

const SimpleInput = (
  type = "text",
  id,
  label,
  placeholder = "Enter Value",
  required,
  maxLength = "100",
  minLength = "0",
  onChange,
  onFocus,
  inputRef,
  error,
  className
) => {
  return (
    <>
      <label
        htmlFor={id}
        className="font-medium font-Montserrat text-sm text-primary mb-2 ml-1"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => [
          inputRef?.onChange && inputRef.onChange(e),
          onChange && onChange(e),
        ]}
        onFocus={(e) => {
          inputRef?.onFocus && inputRef.onFocus(e);
          onFocus && onFocus(e);
        }}
        className={`border border-black rounded-md bg-gray-100 bg-opacity-25 w-full h-9 flex justify-between items-center px-4 text-sm font-Montserrat focus:outline-none ${className}`}
      />
      <div>{error}</div>
    </>
  );
};

export default SimpleInput;
