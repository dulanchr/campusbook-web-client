import React, { useEffect, useRef, useState } from "react";

const DropdownP = ({ options, onSelect, selectedOption }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const domNode = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (option) => {
    onSelect(option);
    setDropdownOpen(false);
  };

  return (
    <div ref={domNode} className="relative w-full">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-between items-center rounded-[5px] px-6 py-[13px] w-full text-base font-medium text-text-primary border border-stroke bg-zero"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className="pl-4">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-text-primary"
          >
            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
          </svg>
        </span>
      </button>
      {dropdownOpen && (
        <div
          className={`
            shadow-1 absolute left-0 z-40 mt-2 w-full rounded-md bg-zero border border-stroke py-[10px] transition-all 
            ${
              dropdownOpen
                ? "top-full opacity-100 visible"
                : "top-[110%] invisible opacity-0"
            }
          `}
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`
                cursor-pointer block px-5 py-2 text-base text-primary-text
                ${
                  selectedOption === option
                    ? "bg-text-primary"
                    : "hover:bg-hover"
                }
              `}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownP;
