import React, { useState } from 'react';

function Type({ customText }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className='flex items-center justify-right'>
      <div className='ml-[10%]'>
        Multi-Select
        <label className='ml-5'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          {isChecked && <span className='text-gray-400'>{customText}</span>}
        </label>
      </div>
    </div>
  );
}

export default Type;
