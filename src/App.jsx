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
import ResponsiveLayout from "./components/ResponsiveLayout";
import sample from "./assets/reference.jpg";
import BoarderImg from "./assets/pxfuel.png";

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
                <button
                  className="border-[3px] w-fit py-2 px-10 mt-10
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
              className="absolute block top-[28%] mr-[20%] right-0 transform scale-x-[-1] w-[17vh] animate-slide-left"
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
      {/* Carousel Section  */}
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
      {/* Project Section  */}
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
      {/* Know Me More Section  */}
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
      {/* Contact Section  */}
      {/* To be finished  */}
      <section
        className="h-screen bg-[#130014] py-10 px-[130px] overflow-hidden 
                  flex flex-col justify-center items-center gap-5"
      >
        <div className="w-fit h-fit border">
          <h3 className="text-white text-[55px] font-bold font-['Poppins]">
            Keep in Touch
          </h3>
          <div className=" border-2 px-20"></div>
        </div>
        <div className="w-full border grid grid-cols-2 text-white">
          <div className="col-1 border p-[60px]">
            <h3 className="text-[35px] font-semibold font-['Poppins']">
              Send me an Email
            </h3>
            <p className="text-[15px] font-['Poppins']">
              Lorem ipsum dolor sit amet consectetur. Mi elit fusce vitae vel
              pellentesque feugiat facilisis. Morbi tortor ut diam semper.
            </p>
          </div>
          <div className="col-span-1 border ">
            <div className="h-[505px] w-[555px] border relative">
              <div
                className="absolute h-[275px] w-[452px] border-[2px] border-black right-0 top-[55px] 
              bg-gray-200 z-20 rounded-[4px]"
              ></div>
              <div
                className="absolute h-[275px] w-[452px] border-[3px] border-[#A72F3B] bg-[#A72F3B] 
              right-[15px] top-[75px] z-10 rounded-[4px]"
              ></div>
              <div
                className="absolute h-[275px] w-[452px] border-[3px] border-[#A72F3B] right-[30px] 
              top-[95px] z-0 rounded-[4px]"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <footer className="h-[283px] w-full bg-[#2B002B]">
        <div className="w-full h-full grid grid-cols-3 text-white pt-10">
          {/* Links  */}
          <div className="col-1 flex justify-end">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Poppins'] text-[29px] font-bold">Links</h3>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="maki:arrow"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">Home</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="maki:arrow"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">Profile</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="maki:arrow"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">Projects</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="maki:arrow"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">Achievements</p>
              </div>
            </div>
          </div>
          {/* Socials  */}
          <div className="col-1 flex justify-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Poppins'] text-[29px] font-bold">
                Socials
              </h3>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="ic:baseline-facebook"
                  className="text-white h-[24px] w-[24px]"
                />
                <p className="20px">Facebook</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="ri:instagram-fill"
                  className="text-white h-[24px] w-[24px]"
                />
                <p className="20px">Instagram</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="mdi:github"
                  className="text-white h-[24px] w-[24px]"
                />
                <p className="20px">Github</p>
              </div>
            </div>
          </div>
          {/* Contacts  */}
          <div className="col-1 flex justify-start">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Poppins'] text-[29px] font-bold">
                Contacts
              </h3>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="bi:phone-fill"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">+63987654321</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <Icon
                  icon="dashicons:email"
                  className="text-white h-[20px] w-[20px]"
                />
                <p className="20px">Sample@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
