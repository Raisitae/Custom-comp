"use client";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Checkitem from "./Checkitem";
import LinkText from "./LinkText";

type FormProps = {
  //
};

const Form: React.FC<FormProps> = (
  {
    //
  }
) => {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);

  const handleInputChange = (value: string) => {
    setInput(value);
  };
  const handleClick = () => {
    //
  };

  const validateInput = (value: string) => {
    if (value.length < 5) {
      return "Error";
    }
    return "";
  };

  const handleCheckChange = (value: boolean) => {
    setCheck(value);
  };

  return (
    // this is only to check the input and button functionality
    <div className="">
      <Button text="text" onClick={handleClick} />
      <Input
        label="label"
        type="string"
        placeholder="value"
        onValueChange={handleInputChange}
        validate={validateInput}
      />
      <Checkitem onValueChange={handleCheckChange} label="placeholder label" />
      <LinkText text="link" />
    </div>
  );
};

export default Form;
