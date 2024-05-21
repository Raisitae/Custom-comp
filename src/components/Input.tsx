import React, { useState } from "react";

type InputProps = {
  label: string;
  type: string;
  validate: (value: string) => string;
  placeholder: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  validate,
  onValueChange,
  disabled = false,
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    setValue(newValue);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{ color: "black" }}
        className={`generalStyles ${
          disabled ? "disabledColor disabledMouse" : "defaultStyles"
        } ${
          error
            ? "border-solid border-4 border-red-500"
            : "border-solid border-4 border-blue-500"
        } hover:hoverStyles active:activeStyles focus:focusStyles`}
      />

      {error && (
        <div>
          <img></img>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
