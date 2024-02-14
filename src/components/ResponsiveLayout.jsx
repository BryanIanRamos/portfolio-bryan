import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ResponsiveLayout = ({ img, span, position }) => {
  AOS.init({ delay: 400, duration: 400 });

  return (
    <div
      className={`border-2 rounded-md border-[#D25143] md:col-span-2 row-span-3 ${
        !span ? "md:row-span-1" : `md:row-span-${span}`
      } relative group`}
      data-aos="zoom-out"
    >
      <div
        className="absolute rounded-bl-md rounded-br-md bottom-0 h-[0vh] group-hover:h-[10vh] w-full bg-[#130014]
       opacity-50 transition-height duration-500 ease-in-out group-hover:p-2 text-white overflow-hidden text-[12px]"
      >
        <h3 className="opacity-0 group-hover:opacity-100">WebStock</h3>
        <p className="opacity-0 group-hover:opacity-100">
          A web stock platform for untilizing lessons A web stock platform for
          untilizing lessonsA web stock platform for untilizing lessonsA web
          stock platform for untilizing lessons A web stock platform for
          untilizing lessons
        </p>
      </div>
      <img
        src={img}
        alt="project"
        className={`object-cover ${
          !position ? "object-center" : `object-${position}`
        }  h-full rounded-md`}
      />
    </div>
  );
};

export default ResponsiveLayout;

{
  /* <div className="border md:col-span-2 row-span-3 md:row-span-2"></div>
<div className="border md:col-span-2 row-span-3 md:row-span-1"></div>
<div className="border md:col-span-2 row-span-3 md:row-span-2"></div> */
}
