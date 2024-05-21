import React from "react";

type LinkTextProps = {
  text: string;
  linkto?: string | undefined;
  disabled?: boolean;
};

const LinkText: React.FC<LinkTextProps> = ({
  text,
  linkto,
  disabled = false,
}) => {
  return (
    <a
      href={linkto ? linkto : "/"}
      className={`generalStyles ${
        disabled ? "disabledColor disabledMouse" : "defaultStyles"
      } hover:hoverStyles active:activeStyles focus:focusStyles`}>
      {text}
    </a>
  );
};

export default LinkText;
