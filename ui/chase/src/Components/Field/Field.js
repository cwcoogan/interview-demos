import React from "react";
import Label from "../Labels/Labels";


const Field = ({label, inputComponent}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <div className="w-1/4">
        <Label text={label}/>
      </div>
      <div className="w-3/4 ">
        {inputComponent}
      </div>
    </div>
  );
};

export default Field;
