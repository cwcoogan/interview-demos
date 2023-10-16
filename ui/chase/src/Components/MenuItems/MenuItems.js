import React, { useState } from "react";

function MenuItems({choices, onAddChoice}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
    onAddChoice(option);
  };

  return (
    <div className="relative rounded-md w-full">
      <ul className="bg-white w-2/3 border-2 rounded-md h-24 overflow-auto">
        {options.map((option, index) =>
          option == selectedOption ? (
            <li
              className="bg-gray-200 py-1 px-4 cursor-pointer"
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ) : (
            <li
              className="hover:bg-gray-200 py-1 px-4 cursor-pointer"
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MenuItems;
