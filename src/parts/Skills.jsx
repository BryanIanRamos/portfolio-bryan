import React from "react";
import MyCourasel from "../components/MyCourasel";
import Button from "../components/Button";

const Skills = () => {
  return (
    <section className="h-screen bg-[#130014] py-10 px-[130px] overflow-hidden">
      <div className="w-full h-full  flex flex-1" data-aos="fade-up">
        <div className="w-1/3  px-10 py-[90px]">
          <div className="text-white mb-10">
            <p>MY SKILLS</p>
            <h2 className="text-[28px] font-['Poppins'] font-bold">
              WHAT CAN I DO?
            </h2>
            {/* <hr className="border-5 border-white w-20 h-20 "></hr> */}
            <hr className="border-b-[5px] border-[#D25143] w-[150px]"></hr>
            <p className="my-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Mi elit fusce vitae vel
              pellentesque feugiat facilisis. Morbi tortor ut diam semper.{" "}
            </p>
            {/* <div className="border-b-5 border-white w-20 h-20"></div> */}
          </div>
          <Button text={" View Achievements"} />
        </div>
        <MyCourasel />
      </div>
    </section>
  );
};

export default Skills;
