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
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./parts/AboutMe";
import Skills from "./parts/Skills";
import Projects from "./parts/Projects";
import KnowMore from "./parts/KnowMore";
import Footer from "./parts/Footer";

import ResponsiveLayout from "./components/ResponsiveLayout";
import sample from "./assets/reference.jpg";
import BoarderImg from "./assets/pxfuel.png";
import Bird2 from "./assets/Bird2.png";
import Bird3 from "./assets/Bird3.png";
import Button from "./components/Button";
import MyCourasel from "./components/MyCourasel";

function App() {
  const [movingOffset, setMovingOffset] = useState(0);
  const [movingOffset2, setMovingOffset2] = useState(0);

  // Define maximum offset values
  const MAX_OFFSET1 = 90; // Adjust as needed
  const MAX_OFFSET2 = 90; // Adjust as needed

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const offset1 = Math.min(value * 0.2, MAX_OFFSET1); // Clamp value to MAX_OFFSET1
      const offset2 = Math.min(value * 0.1, MAX_OFFSET2); // Clamp value to MAX_OFFSET2
      setMovingOffset(offset1);
      setMovingOffset2(offset2);
    };

    let animationFrameId;

    const scrollHandler = () => {
      animationFrameId = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    AOS.init({ delay: 5000, duration: 2500 });
  }, []);

  return (
    <>
      {/* Main Section  */}
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
                  <h2 className="md:text-[36px] lg:text-[62px] font-['Poppins'] font-semibold text-left">
                    Hello,
                  </h2>{" "}
                  <Icon icon="mdi:dinosaur-pixel" className=" text-[62px]" />{" "}
                </div>
                <div className="md:text-[36px] lg:text-[62px] font-['Poppins'] font-semibold my-[-17px] py-0 w-fit">
                  I'm Bryan Ramos
                </div>
                <p className="md:text-[16px] lg:text-[20px] mt-2">
                  Aspiring Full-Stack and Game Developer, serious about UI/UX,
                  <br />
                  animations, and Game Development.{" "}
                </p>
                <button
                  className="border-[3px] w-fit md:py-1 md:px-5 lg:py-2 lg:px-10 md:mt-5 lg:mt-10
                           hover:bg-gray-200 hover:text-[#130014] hover:font-semibold"
                >
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
              style={
                movingOffset
                  ? {
                      bottom: `${-movingOffset}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
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
              style={
                movingOffset
                  ? {
                      right: `${-movingOffset}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
            />
            <img
              src={Cloud3}
              alt="Cloud"
              className="absolute block right-[0px] top-[29%] w-[60vh]"
              style={
                movingOffset
                  ? {
                      right: `${-movingOffset}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
            />
            <img
              src={Cloud4}
              alt="Cloud"
              className="absolute block left-[0px] top-[29%] w-[35vh]"
              style={{
                left: `${-movingOffset}px`,
                transition: "bottom 0.1s ease-in-out",
              }}
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
              style={
                movingOffset2
                  ? {
                      left: `${-movingOffset2}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
            />
            <img
              src={Bird1}
              alt="Cloud"
              className="absolute block top-[28%] mr-[20%] right-0  w-[17vh] animate-slide-left"
              style={
                movingOffset2
                  ? {
                      right: `${-movingOffset2}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
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
              style={
                movingOffset
                  ? {
                      bottom: `${-movingOffset}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
            />
            <img
              src={Mountains}
              alt="Mountains"
              className="absolute block w-full bottom-0"
              style={
                movingOffset2
                  ? {
                      bottom: `${-movingOffset2}px`,
                      transition: "bottom 0.1s ease-in-out",
                    }
                  : {}
              }
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
              style={{
                left: `${-movingOffset}px`,
                transition: "bottom 0.1s ease-in-out",
              }}
            />
            <img
              src={RightTrees}
              alt="Trees"
              className="absolute block h-[30vh] bottom-0 right-0 animate-slide-left"
              style={{
                right: `${-movingOffset}px`,
                transition: "bottom 0.1s ease-in-out",
              }}
            />
          </div>
        </div>
        {/* <img
          src={bg}
          alt="Background"
          className="relative inset-0 w-full h-full object-cover"
        /> */}
      </section>
      <AboutMe />
      <Skills />
      <Projects />
      <KnowMore />
      <Footer />
    </>
  );
}

export default App;
