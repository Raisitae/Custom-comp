import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`generalStyles ${
        disabled ? "disabledColor disabledMouse" : "defaultStyles"
      } hover:hoverStyles active:activeStyles focus:focusStyles`}>
      {text}
    </button>
  );
};

export default Button;
