import React from 'react';

function CustomButton({ text, onClick }) {
  return (
    <div>
      <button className="custom-button px-2 py-2 md:px-3 md:py-0 text-white" onClick={onClick}>
        <span className="rounded-lg">{text}</span>
      </button>
    </div>
  );
}

export default CustomButton;
