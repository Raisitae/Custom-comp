import React, { useState } from "react";
import Checkbox from "./Checkbox";

type CheckitemProps = {
  onValueChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
};

const Checkboxitem: React.FC<CheckitemProps> = ({
  onValueChange,
  disabled = false,
  label,
}) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = (value: boolean) => {
    setCheck(value);
    onValueChange(value);
  };

  return (
    <div className="">
      <Checkbox onValueChange={toggleCheck} disabled={disabled} />
      <p>{label}</p>
    </div>
  );
};

export default Checkboxitem;
