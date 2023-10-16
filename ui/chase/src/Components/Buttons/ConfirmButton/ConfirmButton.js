import React, { useState } from "react";
import CustomButton from "../CustomButton";

const ConfirmButton = ({text, formData, onClick}) => {

  const url = 'http://www.mocky.io/v2/566061f21200008e3aabd919'
  const handleButtonClick = async () => {
    try {
      const response = await fetch(url, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      if (response.ok) {
        console.log("Post Data:", formData);
        onClick(formData);
      } else {
        console.error("Error posting data");
      }
    } catch {
      console.error("Error poosting data:");
    }
  };


  return (
    <CustomButton
      className="rounded-lg bg-green-500 text-white hover:opacity-80 font-bold px-3"
      text= {text}
      formData= {formData}
      onClick={handleButtonClick}

    />
  );
};

export default ConfirmButton;
