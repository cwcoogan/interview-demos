import React, { useState, useEffect } from "react";
import "./App.css";
import DropdownMenu from "./Components/DropdownMenu/DropdownMenu";
import MenuItems from "./Components/MenuItems/MenuItems";
import Type from "./Components/Type/Type";
import InputBox from "./Components/InputBox/InputBox";
import Field from "./Components/Field/Field";
import ConfirmButton from "./Components/Buttons/ConfirmButton/ConfirmButton";
import RejectButton from "./Components/Buttons/RejectButton/RejectButton";
import saveForm from "./Requests/utils";
import ErrorBox from "./Components/ErrorBox/ErrorBox";
import Cookies from "js-cookie";

function App() {
  const formData = {
    label: "",
    required: false,
    choices: [],
    displayAlpha: true,
    default: "",
  };

  // cookies
  let cookiesFormData = Cookies.get();

  const [label, setLabel] = useState(cookiesFormData.label); // valid cookies
  const [isRequired, setIsRequired] = useState(cookiesFormData.type == "true"); // validate cookies 
  const [defaultValue, setDefaultValue] = useState(cookiesFormData.defaultValue);
  const [choices, setChoices] = useState(cookiesFormData.choices.split(","));
  const [selectedOption, setSelectedOption] = useState(parseInt(cookiesFormData.option));
  
  
  const [errors, setErrors] = useState([]);
  const [initialRender, setInitialRender] = useState(true);
  const [isLabelValid, setLabelValid] = useState(true);
  const [isChoicesValid, setValidChoices] = useState(true);
  const [isDefaultValid, setDefaultValid] = useState(true);

  
  console.log(cookiesFormData.label);
  
  const options = [
    "Display choices by Alphabetical",
    "Display choices by Input",
  ];

  useEffect(() => {
    validateInput();
    saveCookies();
  }, [label, isRequired, choices, defaultValue, selectedOption]);

  // validate label input
  const validateInput = (type="notFromSubmit") => {
    if (initialRender && type != "fromSubmit") {
      return;
    }
    const errorList = [];
    if (label.trim() === "" || label === null || label === undefined) {
      setLabelValid(false);
      errorList.push("Label is required");
    } else setLabelValid(true);

    // validate no duplications
    if (new Set(choices).size != choices.length) {
      setValidChoices(false);
      errorList.push("Duplicate choices not allowed");
    }
    // validate 50 choice
    else if (choices.length >= 50) {
      setValidChoices(false);
      errorList.push("Cannot exceed 50 choices");
    } else setValidChoices(true);
    setErrors(errorList);
    return (errorList.length > 0);
  };


  const saveCookies = () => {
    Cookies.set("label", label);
    Cookies.set("type", isRequired);
    Cookies.set("choices", choices.join(","));
    Cookies.set("default_value", defaultValue);
    if ((!selectedOption === 0 && !selectedOption === 1) || selectedOption === undefined) {
      Cookies.set("option", 0);  
    } else 
    Cookies.set("option", selectedOption);
  }

  const clearSelection = () => {
    setLabel(" ");
    setIsRequired(false);
    setChoices([]);
    setDefaultValue(" ");
    setSelectedOption(0);
    setLabelValid(true);
    setDefaultValid(true);
    setValidChoices(true);
    setErrors([]);
    setInitialRender(true);
  };

  const handleSubmit = async () => {
    setInitialRender(false);
    const result = validateInput("fromSubmit");
    if (result == true) {
      return;
    }
    // validate edge case for < 50 choices && not in choices
    if (!choices.includes(defaultValue) && choices.length < 50 && defaultValue?.trim() != "" && defaultValue != undefined) {
      setInitialRender(false);
      setChoices(old => [defaultValue, ...old]);
      if (label?.trim() === "" || label === undefined) {
        return;
      }
    }

    formData.label = label;
    formData.required = isRequired;
    formData.choices = selectedOption == 0 ? choices.sort() : choices;
    formData.displayAlpha = selectedOption == 0;
    formData.default = defaultValue;

    try {
      const response = await saveForm(formData);
    } catch (e) {
      console.log("failed to save form ", e);
    }
  };

  // console.log(label);
  // console.log(isRequired);
  // console.log(choices);
  // console.log(displayAlpha);
  // console.log(defaultValue);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="justify-center items-center mx-auto w-1/2 mt-20 h-5/6 border-blue-200 border-2 rounded-lg overflow-hidden">
        <div className="relative w-full py-3 bg-blue-200 opacity-3">
          <header className="text-cyan-700 text-xl px-4">
            <b>Field Builder</b>
          </header>
        </div>

        {/* fill errors*/}
        <div className="flex flex-col items-start justify-left w-full px-10 py-4 ">
          <div className="pb-8 w-full">
            {errors.length > 0 && <ErrorBox errors={errors} />}
          </div>

          <div className="flex items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start gap-y-6 w-full">
              <Field
                label={"Label"}
                inputComponent={
                  <InputBox
                    validLabel={isLabelValid}
                    label={label}
                    setLabel={setLabel}
                  />
                }
              />
              <Field
                label={"Type"}
                inputComponent={
                  <Type
                    customText={"A value is required"}
                    isRequired={isRequired}
                    setIsRequired={setIsRequired}
                  />
                }
              />
              <Field
                label={"Default Value"}
                inputComponent={
                  <InputBox
                    validLabel={isDefaultValid}
                    label={defaultValue}
                    setLabel={setDefaultValue}
                  />
                }
              />
              <Field
                label={"Choices"}
                inputComponent={
                  <MenuItems
                    choices={choices}
                    setChoices={setChoices}
                    isChoicesValid={isChoicesValid}
                  />
                }
              />
              <Field
                label={"Order"}
                inputComponent={
                  <DropdownMenu 
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    options={options}
                  />
                }
              />

              <Field
                label=""
                inputComponent={
                  <div className="flex items-center justify-start gap-5 pb-6">
                    <ConfirmButton
                      text={"Save Changes"}
                      onSubmit={handleSubmit}
                    />
                    <span>or</span>
                    <RejectButton text={"Cancel"} onSubmit={clearSelection} />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
