import React from "react";
import BoarderImg from "../assets/pxfuel.png";

const KnowMore = () => {
  return (
    <section className="h-fit bg-[#130014] py-10   overflow-hidden">
      <div className="h-full w-full flex justify-center items-center mt-10">
        <div className="h-[300px] w-full overflow-hidden relative">
          <div className="h-full w-full absolute bg-[#130014] opacity-30 "></div>
          <h3 className="absolute text-white text-[60px] font-bold w-full text-center top-[50px]">
            KNOW ME MORE
          </h3>
          <div className="w-full h-fill flex justify-center">
            <button
              className="absolute h-[41px] w-[204px] border-[3px] text-white bottom-[90px]
                       hover:bg-gray-200 hover:text-[#130014] hover:font-semibold"
            >
              View Profile
            </button>
          </div>
          <img
            src={BoarderImg}
            alt=""
            className="object-cover object-bottom h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowMore;
