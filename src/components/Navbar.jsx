import React, { useState } from "react";
import eco from "../assets/navbar/eco.svg";
import arrow from "../assets/navbar/Arrow.svg";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 1.7, duration: 2.5, ease: "linear" }}
        className="absolute w-full h-[4rem] text-white bg-transparent flex z-50 gap-1 "
      >
        <div className="w-[25%] bg-transparent flex justify-center items-center ml-[25vw] md:ml-0">
          <img src={eco} alt="eco" />
          <span className="text-center text-[2rem] font-semibold font-custom">
            Galactic.io
          </span>
        </div>
        <div className=" w-[50%] bg-transparent text-xl hidden md:block">
          <div className="flex gap-7 justify-center items-center mt-5">
            {visiblePlanets.map((planet, index) => (
              <span key={index}>{planet}</span>
            ))}
            <button onClick={handleNext} className="">
              <img src={arrow} alt="button" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="w-[25%] bg-transparent mt-5 text-right ml-[30vw] md:hidden">
          <button onClick={toggleMenu} className="text-3xl mr-5">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex w-[25%] bg-transparent mt-5">
          ©2023 Solarsystemdesign
        </div>
      </motion.div>

      <motion.div
        animate={{ x: isOpen ? 0 : "100%" }}
        initial={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 30 }}
        className="fixed top-0 right-0 h-full w-[50%] bg-gray-800 text-white z-40 p-5 md:hidden"
      >
        <div className="flex flex-col gap-5 mt-10">
          {planets.map((planet, index) => (
            <span key={index} onClick={toggleMenu}>
              {planet}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
