import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Vector,
  Group2,
  Group3,
  Group5,
  Group8,
  donut_large,
  mars,
} from "../assets/mars/mars";

const Mars = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div id="Mars" className="w-full h-screen relative overflow-hidden">
      <img
        src={mars}
        alt="mars"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "0" : "-150rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Group8}
        alt="Group8"
        className="absolute h-[36.5rem] top-[18rem] w-[43.5rem] object-cover z-[2]"
      />
      <motion.img
        animate={{ x: inview ? "0" : "-150rem" }}
        transition={{ stiffness: 15, type: "spring", delay: 0.7 }}
        src={Group5}
        alt="Group5"
        className="absolute h-[36.5rem] top-[18rem] left-[0rem] w-[36.5rem] object-cover z-[2]"
      />
      <motion.img
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        src={Vector}
        alt="Vector"
        className="absolute top-[22rem] left-[38rem] h-[6rem] w-[rem] object-cover z-[-1]"
      />
      <motion.div
        initial={{ x: "50rem", opacity: 0 }}
        animate={{ x: inview ? "46rem" : "50rem", opacity: inview ? 1 : 0 }}
        transition={{duration:2.2, delay: 2, ease: "linear" }}
        className="absolute bg-transparent h-[15%] w-[25%] top-[29rem] flex flex-col text-white"
      >
        <div className="h-[40%] text-4xl font-custom font-semibold ">
          Martian Moons
        </div>
        <div className="h-[60%] font-light">
          Mars has two small moons, Phobos and Deimos, which are irregularly
          shaped and thought to be captured asteroids.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[40%] top-[5rem] left-[2rem] flex flex-col text-white"
      >
        <div className="h-[40%] text-6xl font-custom font-semibold">4.Mars</div>
        <div className="h-[60%] font-light">
          Mars, often referred to as the "Red Planet," is the fourth planet from
          the Sun and has captivated human imagination for centuries with its
          reddish appearance and potential for hosting life.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        className="absolute h-[70%] w-[20%] top-[8rem] left-[72rem] flex flex-col text-white gap-[2rem] justify-around"
        ref={main}
      >
        <div className="w-full h-[25%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4rem] w-[4rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-3xl font-semibold">3,032 Miles</span>
          </div>
        </div>
        <div className="w-full h-[25%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img src={Group2} alt="Group2" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Night time Temperature</span>
            <span className="text-3xl font-semibold">-180° Celsius</span>
          </div>
        </div>
        <div className="w-full h-[25%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img src={Group3} alt="Group3" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom ">
            <span className="text-xs">Day time Temperature</span>
            <span className="text-3xl font-semibold">±430° Celsius</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mars;
