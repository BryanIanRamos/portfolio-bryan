import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <section
      className="h-screen bg-[#130014] py-10 px-[130px] overflow-hidden
    flex flex-col  items-center"
    >
      <h1 className="text-[#A3413D] text-[48px] font-bold font-['Roboto Flex']">
        Who Am I ?
      </h1>
      <div className=" border-red-300 w-full h-full pt-2 px-6 grid grid-cols-2">
        <div className="flex justify-center items-center w-full h-full ">
          <div className=" h-[530px] w-[407px] glow">
            <div className="w-full h-full bg-[#130014] rounded-lg"></div>
          </div>
        </div>
        <div className=" border-blue-200  text-[#D9D9D9] flex flex-col justify-center gap-10 ">
          <h2 className="text-[32px] font-bold">I’m Bryan</h2>
          <p>
            An aspiring Full-Stack Developer with a passion for creating
            innovative and efficient digital solutions. Currently, I am studying
            at Caraga State University, where I am honing my skills in web
            application development and mobile development. My education and
            hands-on projects have equipped me with a solid foundation in both
            front-end and back-end technologies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-[270px] h-[70px] rounded-lg glow">
              <div className="w-full h-full bg-[#130014] pl-3 rounded-lg flex flex-col justify-center">
                <h3 className="text-[18px] font-bold text-[#A3413D] ">
                  Phone Number
                </h3>
                <p className="text-[14px]">+639516541148</p>
              </div>
            </div>
            <div className="w-[270px] h-[70px] rounded-lg glow">
              <div className="w-full h-full bg-[#130014] pl-3 rounded-lg flex flex-col justify-center">
                <h3 className="text-[18px] font-bold text-[#A3413D] ">
                  Email Address
                </h3>
                <p className="text-[14px]">ianramos3367@gmail.com</p>
              </div>
            </div>
            <div className="w-[270px] h-[70px] rounded-lg glow">
              <div className="w-full h-full bg-[#130014] pl-3 rounded-lg flex flex-col justify-center">
                <h3 className="text-[18px] font-bold text-[#A3413D] ">
                  Location
                </h3>
                <p className="text-[14px]">Bayugan City</p>
              </div>
            </div>
            <div className="w-[270px] h-[70px] rounded-lg glow">
              <div className="w-full h-full bg-[#130014] pl-3 rounded-lg flex flex-col justify-center">
                <h3 className="text-[18px] font-bold text-[#A3413D] ">
                  Education
                </h3>
                <p className="text-[14px]">Bachelor of Science in Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
