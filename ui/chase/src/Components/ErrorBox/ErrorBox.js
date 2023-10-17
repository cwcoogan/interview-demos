import React from "react";

const ErrorBox = ({ errors }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-row items-center gap-8 text-md italic p-2 px-4 rounded-md w-full text-red-600 bg-red-100">
        {errors.map((error) => (
          <div key={error}>{error}</div>
        ))}
      </div>
    </div>
  );
};

export default ErrorBox;
