import React from "react";
import { motion } from "framer-motion";
import "../style.css";

import {
  Group1,
  Group2,
  Group3,
  Group,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Layer5,
  Layer6,
  Layer,
  Vector1,
  Vector2,
  Vector4,
  Vector5,
  Vector6,
  Vector,
  Arrow,
} from "../assets/hero/hero";
import Navbar from "./Navbar";

const Hero = () => {
  const handleLearnMoreClick = () => {
    const scrollHeight = window.innerHeight * 1;
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-screen relative overflow-hidden ">
      <Navbar />
      <img
        src={Vector}
        alt="Vector"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <img
        src={Group}
        alt="Group"
        className=" absolute top-0 left-0 h-[100%] w-[100%] object-contain z-1"
      />
      <img
        src={Group1}
        alt="Group1"
        className=" absolute top-0 left-0 h-[80%] w-[100%] object-contain z-2"
      />
      <img
        src={Vector1}
        alt="Vector1"
        className="absolute top-[-18vh] left-[65vw] h-[500px] w-[600px] object-contain z-[-1] "
      />
      <img
        src={Vector2}
        alt="Vector2"
        className="absolute top-[27rem] left-[0rem] h-[550px] w-[600px] object-contain z-[-1]"
      />
      <motion.img
        initial={{
          y: "150vh",
        }}
        animate={{
          y: "85vh",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Layer6}
        alt="Layer6"
        className="absolute left-[40vw] h-[8rem] w-[13vw] object-contain z-3 hidden lg:block "
      />
      <motion.img
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 1.3, duration: 1.9, ease: "linear" }}
        src={Layer}
        alt="Layer"
        className="absolute top-[20rem] left-[20vw] h-[60px] w-[60px] object-contain z-3"
      />
      <motion.img
        initial={{
          x: "150rem",
        }}
        animate={{
          x: "78vw",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Layer2}
        alt="Layer2"
        className="absolute top-[8vh] h-[420px] w-[29vw] object-contain z-3 "
      />
      <motion.img
        initial={{
          x: "150rem",
        }}
        animate={{
          x: "75vw",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Layer3}
        alt="Layer3"
        className="absolute top-[38rem] h-[36vh] w-[28vw] object-contain z-3 md:top-[36rem]"
      />
      <motion.img
        initial={{
          x: "-50rem",
        }}
        animate={{
          x: "0rem",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Layer4}
        alt="Layer4"
        className="absolute top-[46rem] left-[0rem] h-[150px] w-[150px] object-contain z-3"
      />
      <motion.img
        initial={{
          x: "-50rem",
        }}
        animate={{
          x: "-11rem",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Layer5}
        alt="Layer5"
        className="absolute top-[17rem] h-[450px] w-[600px] object-contain z-3"
      />
      <motion.img
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 1.3, duration: 1.9, ease: "linear" }}
        src={Layer1}
        alt="Layer1"
        className="absolute top-[10rem] left-[40vw] h-[15vh] w-[13vh] object-contain z-3 sm:left-[60vw]"
      />
      <motion.img
        initial={{
          x: "-50rem",
        }}
        animate={{
          x: "-1rem",
        }}
        transition={{ delay: 0.3, stiffness: 15, type: "spring" }}
        src={Group2}
        alt="Group2"
        className="absolute top-[8rem] left-[-1rem] h-[130px] w-[130px] object-contain z-3"
      />
      <img
        src={Group3}
        alt="Group3"
        className="absolute top-[5rem] left-[-3.8rem] h-[130px] w-[130px] object-contain z-2"
      />
      <img
        src={Vector4}
        alt="Vector4"
        className="absolute top-[1rem] left-[72rem] h-[130px] w-[130px] object-contain z-2"
      />
      <img
        src={Vector5}
        alt="Vector5"
        className="absolute top-[38rem] left-[10rem] h-[130px] w-[130px] object-contain z-2"
      />
      <img
        src={Vector6}
        alt="Vector6"
        className="absolute top-[22rem] left-[40rem] h-[130px] w-[130px] object-contain z-2"
      />

      <motion.div
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 1.7, duration: 2.5, ease: "linear" }}
        className="absolute h-[60%] w-[70%] md:w-[50%] top-[23vh] lg:top-[23vh] md:top-[30vh] left-[15vw] md:left-[24vw] flex flex-col bg-transparent z-5 text-white gap-[8vh] lg:gap-[5px] md:gap-[10px]"
      >
        <div className="h-[35%] lg:h-[60%] md:h-[50%] w-full text-center text-[1.7rem] lg:text-[4rem] md:text-[3rem] font-extrabold flex flex-col bg-transparent font-custom">
          <span>Let's Get to know Our Solar System Galaxy</span>
        </div>
        <div className="h-[15%] w-full bg-transparent ">
          <p className="text-center font-extralight">
            Embark on a cosmic journey across the ethereal expanse of the solar
            system Galaxy and follow the orchestration of the cosmos and the
            planets weaving stories of their timeless existence.
          </p>
        </div>
        <div className="h-[20%] w-full bg-transparent flex justify-center items-center mt-16 lg:mt-0">
          <button
            className="btn flex justify-center items-center gap-1"
            onClick={handleLearnMoreClick}
          >
            Learn more
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
