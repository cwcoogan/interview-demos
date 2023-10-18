import React, { useState } from "react";
import CustomButton from "../CustomButton";

const ConfirmButton = ({text, onSubmit}) => {
  return (
    <CustomButton
      className="rounded-lg bg-green-500 text-white hover:opacity-80 font-bold px-3"
      text= {text}
      onSubmit={onSubmit}
      type={"submit"}
    />
  );
};

export default ConfirmButton;