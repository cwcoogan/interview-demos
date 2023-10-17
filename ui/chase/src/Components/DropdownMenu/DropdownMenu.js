import React, { useState, useRef } from 'react';
import { DownArrow } from '../Icons/DownArrow/DownArrow';

function DropdownMenu({ options, selectedOption, setSelectedOption }) {
    // Handling drop-down menu
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const closeMenu = (e) => {
        if (menuRef.current && isMenuOpen && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }    
    }

    document.addEventListener("mousedown", closeMenu);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='relative flex flex-row w-full'>
            <div className='relative border-gray-200 w-2/3 py-2 text-center border-2 rounded-l-md outline-none select-none cursor-pointer'>
                {options[selectedOption]}
            </div>
                {isMenuOpen && <ul ref={menuRef} className="absolute z-10 w-2/3 top-10 bg-white border-2 rounded-b-md overflow-auto max-h-24">
                    {options.map((option, index) => (
                        <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer' key={option} onClick={(e) => {setSelectedOption(index)}}>
                            {option}
                        </li>
                    ))}
                </ul>}
                <div onClick={toggleMenu} className='flex items-center justify-center w-12 px-4 py-3 bg-gray-200 hover:opacity-80 cursor-pointer border-2 rounded-r-md'>
                    <DownArrow h='.75em' w='.75em' className='opacity-60'/>
                </div>
        </div>
    );
}

export default DropdownMenu