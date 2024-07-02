import React, { useState } from "react";
import Dropdown from "../Components/Inputs/Dropdown"; // Adjust the path as per your project structure

const LandingPage = () => {
  const options = [
    { id: 1, label: "Physical Science" },
    { id: 2, label: "Biological Science" },
    { id: 3, label: "Arts" },
    { id: 4, label: "Commerce" },
    { id: 4, label: "Technology" },
  ];

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    console.log("Selected option 1:", option);
    // Perform actions based on the selected option, e.g., fetch data from backend
  };

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    console.log("Selected option 2:", option);
    // Perform actions based on the selected option, e.g., fetch data from backend
  };

  return (
    <div className="bg-hero-pattern h-screen flex flex-col justify-center items-center font-bee">
      <p className="text-sm-bee font-bold p-4 py-12">What's your A/L Stream?</p>
      <div className="grid grid-cols-2 gap-4 w-6/7 max-w-2xl min-w-sm">
        <Dropdown
          options={options}
          onSelect={handleSelect1}
          selectedOption={selectedOption1}
        />
        <Dropdown
          options={options}
          onSelect={handleSelect2}
          selectedOption={selectedOption2}
        />
      </div>
    </div>
  );
};

export default LandingPage;
