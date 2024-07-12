import React, { useState } from "react";
import DropdownP from "../Components/Inputs/DropdownP";
import ButtonP2 from "../Components/Buttons/ButtonP2";
import logo from "../Assets/img/Logo/LogoFull.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const options = [
    { id: 1, label: "Physical Science" },
    { id: 2, label: "Biological Science" },
    { id: 3, label: "Arts" },
    { id: 4, label: "Commerce" },
    { id: 5, label: "Technology" },
  ];

  const [selectedOption1, setSelectedOption1] = useState(null);

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

  const handleButtonClick = () => {
    navigate("/step01", { state: { selectedStream: selectedOption1 } });
  };

  return (
    <div className="bg-hero-pattern h-screen flex flex-col font-bee">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-sm-bee font-bold py-12">What's your A/L Stream?</p>
        <div className="grid gap-4 grid-cols-3 w-6/7 max-w-2xl">
          <div className="col-span-2 min-w-fit">
            <DropdownP
              options={options}
              onSelect={handleSelect1}
              selectedOption={selectedOption1}
              className="w-full"
            />
          </div>
          <div className="col-span-1 flex justify-center min-w-fit">
            <ButtonP2
              text="Explore Book"
              icon={buttonIcon}
              onClick={handleButtonClick}
              className="w-full"
            />
          </div>
        </div>
        <p className="text-p1-bee w-6/7 text-center font-bee max-w-2xl text-text-secondary py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-auto ">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <div className="grid gap-8 grid-cols-4  max-w-2xl pb-4">
          <p className="text-p1-bee col-span-1 text-center font-bee max-w-2xl text-text-secondary py-6">
            Lorem ipsum
          </p>
          <p className="text-p1-bee col-span-1 text-center font-bee max-w-2xl text-text-secondary py-6">
            Lorem ipsum
          </p>
          <p className="text-p1-bee col-span-1 text-center font-bee max-w-2xl text-text-secondary py-6">
            Lorem ipsum
          </p>
          <p className="text-p1-bee col-span-1 text-center font-bee max-w-2xl text-text-secondary py-6">
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
