import React, { useState } from "react";
import eco from "../assets/navbar/eco.svg";
import arrow from "../assets/navbar/Arrow.svg";
import { motion } from "framer-motion";

const Navbar = () => {
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
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{ delay: 1.7 , duration:2.5 , ease:"linear" }}
      className="absolute w-full h-[4rem] text-white bg-transparent flex z-50 gap-1"
    >
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

      <div className="w-[25%] bg-transparent mt-5">©2023 Solarsystemdesign</div>
    </motion.div>
  );
};

export default Navbar;
