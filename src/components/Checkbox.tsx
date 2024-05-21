import React, { useState } from "react";

type CheckboxProps = {
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  onValueChange,
  disabled = false,
}) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    const newValue = !check;
    setCheck(newValue);
    onValueChange(newValue);
  };

  return (
    <div>
      <input
        onChange={toggleCheck}
        type="checkbox"
        disabled={disabled}
        checked={check}
        className={`generalStyles ${
          disabled ? "disabledColor disabledMouse" : "defaultStyles"
        } hover:accent-slate-800 active:accent-slate-600 focus:accent-slate-300`}
      />
    </div>
  );
};

export default Checkbox;
