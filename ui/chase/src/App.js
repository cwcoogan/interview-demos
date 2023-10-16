import React, { useState } from "react";
import "./App.css";
import DropdownMenu from "./Components/DropdownMenu/DropdownMenu";
import CustomButton from "./Components/Buttons/CustomButton";
import MenuItems from "./Components/MenuItems/MenuItems";
import DefaultValue from "./Components/DefaultValue/DefaultValue";
import Type from "./Components/Type/Type";
import InputBox from "./Components/InputBox/InputBox";
import Label from "./Components/Labels/Labels";
import Field from "./Components/Field/Field";
import ConfirmButton from "./Components/Buttons/ConfirmButton/ConfirmButton";
import RejectButton from "./Components/Buttons/RejectButton/RejectButton";

function App() {
/* handle form */
const [formData, setFormData] = useState({
  label: "",
  type: "",
  defaultValue: "",
  choices: [],
  order: "default",
});

const handleFormChange = (name, value) => {
  setFormData({
    ...formData,
    [name]: value,
  });
};

/* need maybe just this */
const handleConfirmButtonClick = (data) => {
  console.log('Data received in App:', data);
};

const handleAddChoice = (choice) => {
  // Update choices directly in the state
  setFormData((prevFormData) => ({
    ...prevFormData,
    choices: [...prevFormData.choices, choice],
  }));
};



  /* handle menu item for choices */
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleMenuItemClick = (choice) => {
    setSelectedChoice(choice);
  };

  /* Handle button clicks*/
  const handleButtonClick = () => {
    alert("button clicked");
  };

  /* consts for ordering */
  const options = [
    {
      value: "Display choices in Alphabetical",
      label: "Display choices in Alphabetical",
    },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "alphabetical", label: "Alphabetical" },
  ];

  const [selectedOrder, setSelectedOrder] = useState("default");
  const [inputValue, setInputValue] = useState("");

  const handleOrderChange = (value) => {
    setSelectedOrder(value);
    setInputValue(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    // this div handles the entire screen
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="justify-center items-center mx-auto w-1/2 mt-20 h-3/4 border-blue-200 border-2 rounded-lg overflow-hidden">
        <div className="relative w-full py-3 bg-blue-200 opacity-3">
          <header className="text-cyan-700 text-xl px-4">
            <b>Field Builder</b>
          </header>
        </div>

        <div className="flex items-center justify-left w-full p-2 px-5">
          <div className="flex flex-col items-start justify-start gap-y-6 w-full p-5">
            <Field label={"Label"} inputComponent={<InputBox onInputChange={(value) => handleFormChange("label", value)}/>} />
            <Field
              label={"Type"}
              inputComponent={<Type customText={"A value is required"} />}
            />
            <Field label={"Default Value"} inputComponent={<InputBox />} />
            <Field label={"Choices"} inputComponent={<MenuItems choices={formData.choices} onAddChoice={handleAddChoice}/>} 
            />
            <Field
              label={"Order"}
              inputComponent={
                <DropdownMenu options={options} onSelect={handleOrderChange} />
              }
            />

            <Field label="" inputComponent={
            <div className="flex items-center justify-start gap-5 pb-6">
              <ConfirmButton
                text={"Save Changes"}
                formData={formData}
                onClick={handleConfirmButtonClick}
                // handleButtonClick={() => {}}
              />
              <span>or</span>
              <RejectButton text={"Cancel"} handleButtonClick={() => {}} />
            </div>}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
