import React, { useState, useEffect } from "react";
import DropdownP from "../Components/Inputs/DropdownP";
import ButtonP2 from "../Components/Buttons/ButtonP2";
import { useNavigate, useLocation } from "react-router-dom";
const Step01 = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const selectedStream = location.state?.selectedStream;

  const physicalScienceData = ["Physics", "Chemistry", "Mathematics"];
  const biologicalScienceData = ["Biology", "Zoology", "Botany"];
  const artsData = ["History", "Literature", "Political Science"];
  const commerceData = ["Accounting", "Economics", "Business Studies"];
  const technologyData = [
    "Computer Science",
    "Information Technology",
    "Engineering",
  ];
  // Define options based on selected stream
  const [optionsToUse, setOptionsToUse] = useState([]);

  useEffect(() => {
    console.log("Selected stream:", selectedStream); // Check the value of selectedStream
    switch (selectedStream) {
      case "Physical Science":
        setOptionsToUse(physicalScienceData);
        break;
      case "Biological Science":
        setOptionsToUse(biologicalScienceData);
        break;
      case "Arts":
        setOptionsToUse(artsData);
        break;
      case "Commerce":
        setOptionsToUse(commerceData);
        break;
      case "Technology":
        setOptionsToUse(technologyData);
        break;
      default:
        setOptionsToUse([]);
    }
  }, [selectedStream]);

  // Example handleButtonClick function
  const handleButtonClick = () => {
    navigate("/alresults");
  };
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    console.log("Selected option 1:", option);
  };
  const buttonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#FFFFFF"
    >
      <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
    </svg>
  );

  console.log("options", optionsToUse); // Check the value of selectedStream

  // Example usage of optionsToUse
  return (
    <div className="bg-hero-pattern h-screen flex flex-col font-bee">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="grid gap-4 grid-cols-3 w-6/7 max-w-2xl">
          <div className="col-span-2 min-w-fit">
            <DropdownP
              options={optionsToUse}
              onSelect={handleSelect1}
              selectedOption={selectedOption1}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step01;
