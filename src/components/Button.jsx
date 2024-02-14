import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-white w-[230px] h-fu relative p-2">
      {/* <div className="absolute top-0 left-0 border-t-4 border-l-4 border-[#D25143] h-full w-11"></div> */}
      <div className=" absolute top-0 left-0 bg-gradient-to-r from-red-500 via-[#D25143] to-[#130014] h-[4px] w-[60px]"></div>
      <div className=" absolute top-0 left-0 bg-gradient-to-b from-red-500 via-[#D25143] to-[#130014] h-full w-[4px]"></div>
      {text}
      <div className=" absolute bottom-0 right-0 bg-gradient-to-l from-red-500 via-[#D25143] to-[#130014] h-[4px] w-[60px]"></div>
      <div className=" absolute bottom-0 right-0 bg-gradient-to-t from-red-500 via-[#D25143] to-[#130014] h-full w-[4px]"></div>
    </button>
  );
};

export default Button;
