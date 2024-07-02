import React, { useState } from "react";
import DropdownP from "../Components/Inputs/DropdownP";
import ButtonP2 from "../Components/Buttons/ButtonP2";
import logo from "../Assets/img/Logo/LogoFull.svg";

const LandingPage = () => {
  // ---------Dropdown Content---------
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
  // ----------------------------------

  // ---------Button Icon---------
  const buttonIcon = (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7063 9.20624C14.0969 8.81562 14.0969 8.18124 13.7063 7.79062L8.70625 2.79062C8.31563 2.39999 7.68125 2.39999 7.29063 2.79062C6.9 3.18124 6.9 3.81562 7.29063 4.20624L10.5875 7.49999H1C0.446875 7.49999 0 7.94687 0 8.49999C0 9.05312 0.446875 9.49999 1 9.49999H10.5844L7.29375 12.7937C6.90312 13.1844 6.90312 13.8187 7.29375 14.2094C7.68437 14.6 8.31875 14.6 8.70938 14.2094L13.7094 9.20937L13.7063 9.20624Z"
        fill="white"
      />
    </svg>
  );
  // ---------Button Icon---------

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
              onClick={() => console.log("Button clicked!")}
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
