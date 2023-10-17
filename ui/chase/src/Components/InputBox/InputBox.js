import React, { useState } from "react";

function InputBox({ className, label, setLabel, validLabel }) {
  return (
    <div className={"w-full " + className}>
      <label className="form-label">
        {validLabel ? (
          <input
            className="form-input rounded-lg border-2 border-gray-300 w-2/3 py-2 px-4 text-lg outline-none"
            type="text"
            name="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        ) : (
            <div className="flex flex-row gap-2 items-center justify-start">
          <input 
            className="form-input rounded-lg border-2 border-red-500 w-2/3 py-2 px-4 text-lg outline-none"
            type="text"
            name="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
       
          </div>
        )}
      </label>
    </div>
  );
}

export default InputBox;
