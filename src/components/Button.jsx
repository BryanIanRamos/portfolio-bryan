import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-white w-[230px] relative p-2 group">
      {/* <div className="absolute top-0 left-0 border-t-4 border-l-4 border-[#D25143] h-full w-11"></div> */}
      <div
        className=" absolute top-0 left-0 bg-gradient-to-r from-red-500 via-[#D25143] to-[#130014] h-[4px] w-[60px] 
        group-hover:w-[230px] group-hover:to-[#D25143] transition-all duration-500 ease-in-out"
      ></div>
      <div
        className=" absolute top-0 left-0 bg-gradient-to-b from-red-500 via-[#D25143] to-[#130014] h-full w-[4px]
                  group-hover:to-[#D25143] "
      ></div>
      {text}
      <div
        className=" absolute bottom-0 right-0 bg-gradient-to-l from-red-500 via-[#D25143] to-[#130014] h-[4px] w-[60px]
      group-hover:w-[230px] group-hover:to-[#D25143] transition-all duration-500 ease-in-out"
      ></div>
      <div
        className=" absolute bottom-0 right-0 bg-gradient-to-t from-red-500 via-[#D25143] to-[#130014] h-full w-[4px]
                  group-hover:to-[#D25143]"
      ></div>
    </button>
  );
};

export default Button;
