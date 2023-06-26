import React from "react";
// images
import Image from "../assets/avatar.svg";
// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className=" min-h-[85vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold loading-[0.8] lg:text-[90px]">
              AKOL <span>RAWLINGS</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase loading-[1]">
              <span className=" text-white mr-4 py-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Graphic Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              I create compelling and user-friendly web applications. I deliver
              seemless digital experiences and Amazing Graphical Designs.
            </p>
            <div className=" flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Projects
              </a>
            </div>
            {/* socials */}
            <div className=" flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* image */}
          <div>
            <img src={Image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
