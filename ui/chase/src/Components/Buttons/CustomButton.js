import React from 'react';

function CustomButton({ text, onClick, className}) {
  return (
    <div>
      <button className={"custom-button py-2 " + className} onClick={onClick}>
        <span className="rounded-lg">{text}</span>
      </button>
    </div>
  );
}

export default CustomButton;
