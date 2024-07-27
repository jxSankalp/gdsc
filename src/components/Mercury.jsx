import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  mercury,
  Group,
  donut_large,
  Group2,
  Group3,
} from "../assets/mercury/mercury";

const Mercury = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div className="w-full h-screen relative overflow-hidden ">
      <img
        src={mercury}
        alt="mercury"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "0rem" : "-40rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Group}
        alt="Group"
        className="absolute left-[0rem] top-[3rem] w-[90vw] md:w-[38rem] h-[80rem] md:h-auto"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[80%] lg:w-[40%] md:w-[65%] top-[2rem] md:top-[5rem] left-[10vw] lg:left-[50vw] md:left-[20vw] flex flex-col text-white"
        ref={main}
      >
        <div className="h-[50%] text-5xl font-custom font-semibold md:text-7xl">
          1.Mercury
        </div>
        <div className="h-[50%] font-light">
          Mercury is the closest planet to the Sun and is known for its extreme
          temperatures and barren, rocky surface. It is one of the four
          terrestrial planets in our solar system, characterized by their solid,
          rocky composition.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute h-[15%] w-[80%] lg:w-[40%] md:w-[65%] top-[17rem] md:top-[20rem] left-[20vw] lg:left-[50vw] md:left-[20vw] flex text-white gap-5 justify-around md:flex-wrap flex-col md:flex-row"
      >
        <div className="w-[80%] lg:w-[40%] md:w-[40%] border-2 rounded-2xl border-[#6a327e] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4rem] w-[4rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-lg md:text-2xl">3,032 Miles</span>
          </div>
        </div>
        <div className="w-[80%] lg:w-[43%] md:w-[43%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
          <img src={Group2} alt="Group2" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Night time Temperature</span>
            <span className="text-lg md:text-2xl">-180° Celsius</span>
          </div>
        </div>
        <div className="w-[80%] lg:w-[40%] md:w-[40%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
          <img src={Group3} alt="Group3" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom ">
            <span className="text-xs">Day time Temperature</span>
            <span className="text-lg md:text-2xl">±430° Celsius</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mercury;
