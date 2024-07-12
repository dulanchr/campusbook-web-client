import React from "react";

const ButtonP2 = ({ text, icon, onClick, disabled }) => {
  return (
    <button
      className="bg-alternate-primary flex justify-between items-center rounded-[5px] px-6 py-[13px] w-full text-center text-base font-medium text-zero hover:bg-accent-primary-hover disabled:bg-accent-disable  disabled:text-text-tertiary"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default ButtonP2;
