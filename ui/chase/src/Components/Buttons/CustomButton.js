import React from 'react';

function CustomButton({ text, className, onSubmit, type }) {
  return (
    <div>
      <button className={"custom-button py-2 " + className} onClick={onSubmit} type={type}>
        <span className="rounded-lg">{text}</span>
      </button>
    </div>
  );
}

export default CustomButton;
