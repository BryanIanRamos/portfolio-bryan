import React from "react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
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
            <h3 className="font-['Poppins'] text-[29px] font-bold">Socials</h3>
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
            <h3 className="font-['Poppins'] text-[29px] font-bold">Contacts</h3>
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
  );
};

export default Footer;
