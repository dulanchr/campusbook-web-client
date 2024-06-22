import React from "react";
import Dropdown from "../Components/Inputs/Dropdown"; // Adjust the path as per your project structure

const LandingPage = () => {
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 4, label: "Option 4" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
    // Perform actions based on the selected option, e.g., fetch data from backend
  };

  return (
    <div className="bg-hero-pattern h-screen flex flex-col justify-center items-center font-bee">
      <p className="text-sm-bee font-bold p-4 py-12">What's your A/L Stream?</p>
      <div className="grid grid-cols-2 gap-4 w-6/7 max-w-2xl min-w-sm ">
        <Dropdown options={options} onSelect={handleSelect} />
        <Dropdown options={options} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default LandingPage;
