import React, { useState } from 'react';

function MenuItems() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Option 1',
    'Option 2',
    
  ];
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); 
  };

  return (
    <div className="border-gray-300 border-2 rounded-md">
      <input
        type="text"
        readOnly
        value={selectedOption} 
        onClick={toggleMenu} 
        placeholder="Set to Default Value"
      />
      {isMenuOpen && (
        <ul className="absolute z-10 bg-white border-solid border-gray-300 border-x-2 border-b-2 w-[9.9%]">
          {options.map((option, index) => (
            <li className='hover:bg-gray-200'key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuItems;
