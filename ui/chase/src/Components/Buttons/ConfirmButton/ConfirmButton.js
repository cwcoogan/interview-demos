import React from "react";
import CustomButton from "../CustomButton";

const ConfirmButton = ({text, handleButtonClick}) => {
  return (
    <CustomButton
      className="rounded-lg bg-green-500 text-white hover:opacity-80 font-bold px-3"
      text= {text}
      onClick={handleButtonClick}
    />
  );
};

export default ConfirmButton;
