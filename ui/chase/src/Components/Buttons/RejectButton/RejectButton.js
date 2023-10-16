import React from "react";
import CustomButton from "../CustomButton";

const RejectButton = ({text, handleButtonClick}) => {
  return (
    <CustomButton
      className="font-bold cursor-pointer hover:text-red-400 rounded-lg bg-white text-red-500"
      onClick={handleButtonClick}
      text={text}
    />
  );
};

export default RejectButton;
