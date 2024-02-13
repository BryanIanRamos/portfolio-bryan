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
              <div>
                <h1 className="text-4xl text-center">Hello Bryan</h1>
                <p className="">
                  This is some content on top of the background image.
                </p>
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
              className="absolute block top-[28%] ml-[15%] left-0 w-[30vh]"
              style={movingOffset2 ? { left: `${-movingOffset2}px` } : {}}
            />
            <img
              src={Bird1}
              alt="Cloud"
              className="absolute block top-[28%] mr-[20%] right-0 transform scale-x-[-1] w-[17vh]"
              style={movingOffset2 ? { right: `${-movingOffset2}px` } : {}}
            />

            {/* Bottom */}
            <img
              src={BackMountains}
              alt="Mountains"
              className="absolute block w-full bottom-0 pb-5"
              style={movingOffset ? { bottom: `${-movingOffset}px` } : {}}
            />
            <img
              src={Mountains}
              alt="Mountains"
              className="absolute block w-full bottom-0"
              style={movingOffset2 ? { bottom: `${-movingOffset2}px` } : {}}
            />
            <img
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
            />
          </div>
        </div>
        {/* <img
          src={bg}
          alt="Background"
          className="relative inset-0 w-full h-full object-cover"
        /> */}
      </section>
      <section className="w-screen h-screen bg-[#130014] py-10 px-[130px]">
        <div className="w-full h-full border flex flex-1">
          <div className="w-1/3 border">
            <div>
              <p></p>
            </div>
          </div>
          <div className="w-2/3 border"></div>
        </div>
      </section>
    </>
  );
}

export default App;
