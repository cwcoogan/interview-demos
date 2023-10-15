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
    <div className="dropdown-menu border-gray-300 border-2 rounded-md">
      <input
        type="text"
        readOnly
        value={selectedOption} 
        onClick={toggleMenu} 
        placeholder="Set to Default Value"
      />
      {isMenuOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuItems;
