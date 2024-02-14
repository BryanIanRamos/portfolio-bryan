import React from "react";
import { Carousel } from "flowbite-react";
import "../App.css";
import { Icon } from "@iconify/react";
import TagData from "../data/TagData";


const MyCarousel = () => {
  return (
    <div className="w-2/3 p-10  flex flex-wrap " >
      {/* You can use the Carousel component here */}
      <Carousel
        leftControl=" "
        rightControl=" "
        slideInterval={7000}
        className="custom-carousel"
      >
        {TagData &&
          TagData.map((elem, index) => (
            <div className="flex flex-wrap h-full w-full " key={index}>
              <div className="h-1/2 w-full  p-5 flex flex-row">
                <div className="w-full h-full  p-10">
                  <div className="w-[71px] h-[71px] border-[4px] border-[#D25143] flex justify-center items-center p-3">
                    <Icon
                      icon="mdi:react"
                      className="text-white h-full w-full"
                    />
                  </div>
                  <h2 className="text-[24px] text-white font-['Poppins'] font-semibold">
                    {elem.names.name1}
                  </h2>
                  <p className="text-[18px] text-white">
                    {elem.description.d1}
                  </p>
                </div>
                <div className="w-full h-full  p-10">
                  <div className="w-[71px] h-[71px] border-[4px] border-[#D25143] flex justify-center items-center p-3">
                    <Icon
                      icon="mdi:react"
                      className="text-white h-full w-full"
                    />
                  </div>
                  <h2 className="text-[24px] text-white font-['Poppins'] font-semibold">
                    {elem.names.name2}
                  </h2>
                  <p className="text-[18px] text-white">
                    {elem.description.d2}
                  </p>
                </div>
              </div>
              <div className="h-1/2 w-full  p-5 flex flex-row">
                <div className="w-full h-full  p-10">
                  <div className="w-[71px] h-[71px] border-[4px] border-[#D25143] flex justify-center items-center p-3">
                    <Icon
                      icon="mdi:react"
                      className="text-white h-full w-full"
                    />
                  </div>
                  <h2 className="text-[24px] text-white font-['Poppins'] font-semibold">
                    {elem.names.name3}
                  </h2>
                  <p className="text-[18px] text-white">
                    {elem.description.d3}
                  </p>
                </div>
                <div className="w-full h-full  p-10">
                  <div className="w-[71px] h-[71px] border-[4px] border-[#D25143] flex justify-center items-center p-3">
                    <Icon
                      icon="mdi:react"
                      className="text-white h-full w-full"
                    />
                  </div>
                  <h2 className="text-[24px] text-white font-['Poppins'] font-semibold">
                    {elem.names.name4}
                  </h2>
                  <p className="text-[18px] text-white">
                    {elem.description.d4}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
