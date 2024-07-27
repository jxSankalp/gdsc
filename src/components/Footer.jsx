import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import eco from "../assets/footer/eco.svg";
import arrow from "../assets/footer/Arrow.svg";

const Footer = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });

  const planets = [
    "Sun",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const planetsToShow = 4;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + planetsToShow) % planets.length);
  };

  const visiblePlanets = planets
    .slice(startIndex, startIndex + planetsToShow)
    .concat(
      startIndex + planetsToShow > planets.length
        ? planets.slice(0, (startIndex + planetsToShow) % planets.length)
        : []
    );

  return (
    <div
      ref={main}
    >
      <motion.div
        initial={{ y: "100rem", opacity: 0 }}
        animate={{ y: inview ? "0" : "100rem", opacity: inview ? 1 : 0 }}
        transition={{ duration: 2,  ease: "easeInOut" }}
        className="h-[40vh] w-[80vw] bg-[#1e1f1f] rounded-[2.5rem] flex flex-col text-white"
      >
        <div className="h-[80%] w-full">
          <div className="w-[60%] h-full mx-auto flex flex-col">
            <div className="h-[60%] w-full flex flex-col">
              <div className="h-[50%] w-full flex justify-center items-center text-4xl font-custom font-semibold">
                Join The Education Comunity
              </div>
              <div className="h-[50%] w-full text-center font-light">
                Join the Education Community today and be part of a movement
                that's transforming minds and shaping tomorrows.
              </div>
            </div>
            <div className="h-[40%] w-full flex justify-center items-center">
              <div className="h-[3.2rem] w-[22rem] bg-white rounded-full flex justify-center items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="outline-none text-black"
                />
                <button className="bg-custom-radial rounded-full h-[2.5rem] w-[7.5rem]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%]  bg-transparent flex gap-1">
          <div className="w-[25%] bg-transparent flex justify-center items-center">
            <img src={eco} alt="eco" />
            <span className="text-center text-[2rem] font-semibold font-custom">
              Galactic.io
            </span>
          </div>
          <div className=" w-[50%] bg-transparent text-xl">
            <div className="flex gap-7 justify-center items-center mt-5">
              {visiblePlanets.map((planet, index) => (
                <span key={index}>{planet}</span>
              ))}
              <button onClick={handleNext} className="">
                <img src={arrow} alt="button" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="w-[25%] bg-transparent mt-5">
            ©2023 Solarsystemdesign
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
