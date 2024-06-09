import React from "react";

import ResponsiveLayout from "../components/ResponsiveLayout";
import sample from "../assets/reference.jpg";

const Projects = () => {
  return (
    <section className="h-screen bg-[#130014] py-10 px-[130px] overflow-hidden">
      <div className=" h-full w-full grid md:grid-cols-6  gap-5 p-5">
        <div className=" md:col-span-2 row-span-3 md:row-span-1 flex flex-col justify-center items-center">
          <div className="pl-3">
            <span className="text-white text-[32px] font-['Poppins'] font-semibold leading-[1.5]">
              MOST HIGHLIGTED PROJECT{" "}
            </span>
            <hr className="border-[3px] border-[#D25143] w-[70%]" />
          </div>
        </div>
        <ResponsiveLayout img={"src/assets/reference.jpg"} />
        <ResponsiveLayout img={sample} position={"left"} span={2} />
        <ResponsiveLayout img={sample} />
        <ResponsiveLayout img={sample} position={"left"} span={2} />
        <div className="  md:col-span-2 row-span-3 md:row-span-1 flex flex-col justify-center items-center text-white">
          <div className="px-3">
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Mi elit fusce vitae vel
              pellentesque feugiat facilisis. Morbi tortor ut diam semper.
            </p>
            <button className="border-2 px-3 py-1 mt-4 hover:bg-gray-200 hover:text-[#130014] hover:font-semibold">
              View More
            </button>
          </div>
        </div>
        <ResponsiveLayout img={sample} />
      </div>
    </section>
  );
};

export default Projects;
