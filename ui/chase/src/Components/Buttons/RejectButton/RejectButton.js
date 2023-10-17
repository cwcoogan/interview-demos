import React from "react";
import CustomButton from "../CustomButton";

const RejectButton = ({text, onSubmit}) => {
  return (
    <CustomButton
      className="font-bold cursor-pointer hover:text-red-400 rounded-lg bg-white text-red-500"
      onSubmit={onSubmit}
      text={text}
    />
  );
};

export default RejectButton;
