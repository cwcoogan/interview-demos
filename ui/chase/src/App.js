import React, { useState } from 'react';
import './App.css';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import CustomButton from './Components/Button/Button';
import MenuItems from './Components/MenuItems/MenuItems';
import DefaultValue from './Components/DefaultValue/DefaultValue';
import Type from './Components/Type/Type';
import InputBox from './Components/InputBox/InputBox';


function App() {

  /* handle menu item for choices */
  const [selectedChoice, setSelectedChoice] = useState('');

  const handleMenuItemClick = (choice) => {
    setSelectedChoice(choice);
  };

  /* Handle button clicks*/
  const handleButtonClick = () => {
    alert('button clicked');
  }


  /* consts for ordering */
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'alphabetical', label: 'Alphabetical' },
  ];

  const [selectedOrder, setSelectedOrder] = useState('default');
  const [inputValue, setInputValue] = useState('');

  const handleOrderChange = (value) => {
    setSelectedOrder(value);
    setInputValue(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    // this div handles the entire screen 
    <div className='justify-center items-center mx-auto w-1/2 mt-20 h-[650px] border-blue-200 border-2 rounded-lg'>
      <div className='relative w-full h-[100px] bg-blue-200 opacity-2 rounded-lg'>
        <header className='text-cyan-700 text-lg p-2'><b>Field Builder</b></header>
      </div>


      <InputBox />
      <Type customText=" A value is required" />
      <DefaultValue />

      <div className='h-[50px] pt-3'>
        <div className='flex items-center'>
          <label className='form-label ml-5'>
            Choices
          </label>
          <span className='ml-[10%]'></span>
          <MenuItems />
        </div>
      </div>



      <div className='h-[50px] pt-3'>
        <div className='flex items-center'>
          <label className='form-label ml-5'>
            Order

          </label>
          <span className='ml-[10%] '></span>
          <DropdownMenu options={options} onSelect={handleOrderChange} />
        </div>
      </div>



      <div className='flex items-center justify-left'>
        <div className="ml-[5%] rounded-lg bg-green-400">
          <CustomButton text="Save" onClick={handleButtonClick} />
        </div>

        <div className="ml-[5%] rounded-lg bg-red-400">
          <CustomButton text="Cancel" onClick={handleButtonClick} />
        </div>

      </div>


    </div>



  );
}

export default App;
