import React, { useState } from 'react';

function Type({ customText }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className='flex items-center'>
      <div className='items-center font-semibold' >
        <label className='text-lg'> Multi-Select</label>
        <input className='w-10 scale-125 outline-none'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        {isChecked && <span className='text-lg text-gray-500'>{customText}</span>}
      </div>
    </div>
  );    
}

export default Type;
