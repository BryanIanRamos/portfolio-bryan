import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/BgSky.png";
import stars from "./assets/Stars.png";
import Mountains from "./assets/Front Mountain.png";
import BackMountains from "./assets/Back_Mountain.png";
import LeftTrees from "./assets/Left Trees.png";
import RightTrees from "./assets/Right Trees.png";
import Sun from "./assets/Sun.png";
import Cloud1 from "./assets/Cloud1.png";
import Cloud2 from "./assets/Cloud2.png";
import Cloud3 from "./assets/Cloud3.png";
import Cloud4 from "./assets/Cloud4.png";
import Cloud5 from "./assets/Cloud5.png";
import Cloud6 from "./assets/Cloud6.png";
import Cloud7 from "./assets/Cloud7.png";
import Bird1 from "./assets/Bird1.png";
import Bird2 from "./assets/Bird2.png";
import Bird3 from "./assets/Bird3.png";
import Button from "./components/Button";
import MyCourasel from "./components/MyCourasel";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [movingOffset, setMovingOffset] = useState(0);
  const [movingOffset2, setMovingOffset2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setMovingOffset(value * 0.3); // Set movingOffset directly based on scrollY
      setMovingOffset2(value * 0.1); // Set movingOffset directly based on scrollY
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  AOS.init({ delay: 5000, duration: 2500 });

  return (
    <>
      <section>
        <div className="relative h-screen overflow-hidden">
          <img
            src={bg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative  flex flex-col items-center justify-center h-full text-white">
            <div className="absolute w-full h-full flex items-center justify-center z-10 text-gray-300">
              <div className="flex flex-col absolute left-[13%] top-[25%] animate-fade-in">
                <div className="flex gap-2  items-center ">
                  <h2 className="text-[62px] font-['Poppins'] font-semibold text-left">
                    Hello,
                  </h2>{" "}
                  <Icon icon="mdi:dinosaur-pixel" className=" text-[62px]" />{" "}
                </div>
                <div className="text-[62px] font-['Poppins'] font-semibold my-[-17px] py-0 w-fit">
                  I'm Bryan Ramos
                </div>
                <p className="text-[20px] mt-2">
                  Aspiring Full-Stack and Game Developer, serious about UI/UX,
                  <br />
                  animations, and Game Development.{" "}
                </p>
                <button className="border-[3px] w-fit py-2 px-10 mt-10">
                  About Me
                </button>
              </div>
            </div>
            {/* Top */}
            <img
              src={stars}
              alt="Stars"
              className="absolute block top-0 w-full"
            />
            <img
              src={Sun}
              alt="Stars"
              className="absolute block bottom-0 h-[63vh]"
              style={movingOffset ? { bottom: `${-movingOffset}px` } : {}}
            />
            {/* Clouds */}
            <img
              src={Cloud1}
              alt="Cloud"
              className="absolute block left-[7%]  w-[25vh]"
            />
            <img
              src={Cloud2}
              alt="Cloud"
              className="absolute block mr-[20%] right-0 top-[45%] w-[60vh]"
              style={movingOffset ? { right: `${-movingOffset}px` } : {}}
            />
            <img
              src={Cloud3}
              alt="Cloud"
              className="absolute block right-[0px] top-[29%] w-[60vh]"
              style={movingOffset ? { right: `${-movingOffset}px` } : {}}
            />
            <img
              src={Cloud4}
              alt="Cloud"
              className="absolute block left-[0px] top-[29%] w-[35vh]"
              style={{ left: `${-movingOffset}px` }}
            />
            <img
              src={Cloud5}
              alt="Cloud"
              className="absolute block top-[16%] w-[90vh]"
            />
            <img
              src={Cloud6}
              alt="Cloud"
              className="absolute block top-[7%] left-10 w-[35vh]"
            />
            <img
              src={Cloud7}
              alt="Cloud"
              className="absolute block top-[7%] right-0 w-[35vh]"
            />

            {/* Bird  */}
            <img
              src={Bird1}
              alt="Cloud"
              className="absolute block top-[28%] ml-[15%] left-0 w-[30vh] animate-slide-right"
              style={movingOffset2 ? { left: `${-movingOffset2}px` } : {}}
            />
            <img
              src={Bird1}
              alt="Cloud"
              className="absolute block top-[28%] mr-[20%] right-0 transform scale-x-[-1] w-[17vh] animate-slide-left"
              style={movingOffset2 ? { right: `${-movingOffset2}px` } : {}}
            />

            {/* Bottom */}
            {/* <img
              src={BackMountains}
              alt="Mountains"
              className="absolute block w-full bottom-0 pb-5"
              style={movingOffset ? { bottom: `${-movingOffset}px` } : {}}
            /> */}
            <img
              src={BackMountains}
              alt="Mountains"
              className="absolute block w-full bottom-0 pb-5 animate-slide-up"
              style={movingOffset ? { bottom: `${-movingOffset}px` } : {}}
            />
            <img
              src={Mountains}
              alt="Mountains"
              className="absolute block w-full bottom-0"
              style={movingOffset2 ? { bottom: `${-movingOffset2}px` } : {}}
            />
            {/* <img
              src={LeftTrees}
              alt="Mountains"
              className="absolute block h-[30vh] bottom-0 left-0"
              style={{ left: `${-movingOffset}px` }}
            />
            <img
              src={RightTrees}
              alt="Mountains"
              className="absolute block h-[30vh] bottom-0 right-0"
              style={{ right: `${-movingOffset}px` }}
            /> */}
            <img
              src={LeftTrees}
              alt="Trees"
              className="absolute block h-[30vh] bottom-0 left-0 animate-slide-right"
              style={{ left: `${-movingOffset}px` }}
            />
            <img
              src={RightTrees}
              alt="Trees"
              className="absolute block h-[30vh] bottom-0 right-0 animate-slide-left"
              style={{ right: `${-movingOffset}px` }}
            />
          </div>
        </div>
        {/* <img
          src={bg}
          alt="Background"
          className="relative inset-0 w-full h-full object-cover"
        /> */}
      </section>
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
    </>
  );
}

export default App;
