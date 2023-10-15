import React, { useState } from 'react';

function DropdownMenu({options, onSelect }) {
    const [selectedValue, setSelectedValue] = useState ('default');
    
    const handleSelectedChange = (e) => {
        setSelectedValue(e.target.value);
        onSelect(e.target.value);
    };

    return (
        <div>
        <select className=' border-gray-200 border-2 rounded-md' value={selectedValue} onChange={handleSelectedChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
}

export default DropdownMenu