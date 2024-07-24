import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaDatabase } from "react-icons/fa";
import { SiPython, SiTableau, SiSalesforce } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Aspiring Data Scientist.", "AI & DS Enthusiast.", "Student @VIIT."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sruthi Karanam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate about harnessing the power of data and artificial intelligence to drive innovative solutions. Proficient in various programming languages, data analysis, and software development tools.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/sruthi.karanam" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/s_r_u_t_h_iii" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/karanam-sruthi-a08412255/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/sruthi-karanam" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiTableau />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <SiSalesforce />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;

