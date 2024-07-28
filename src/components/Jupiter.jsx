import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  donut_large,
  Group2,
  Group5,
  jupiter,
  Layer2,
} from "../assets/jupiter/jupiter";

const Jupiter = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });
  return (
    <div id="Jupiter" className="w-full h-screen relative overflow-hidden">
      <img
        src={jupiter}
        alt="jupiter"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "48rem" : "150rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Layer2}
        alt="Layer2"
        className="absolute h-[48.5rem] top-[0rem] w-[48.5rem] object-cover z-[1]"
      />
      <motion.img
        animate={{ x: inview ? "58rem" : "150rem" }}
        transition={{ stiffness: 15, type: "spring", delay: 0.7 }}
        src={Group5}
        alt="Group5"
        className="absolute h-[39.5rem] top-[0rem] w-[38.5rem] object-cover z-[1]"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[40%] top-[6rem] left-[5rem] flex flex-col gap-8 text-white"
        ref={main}
      >
        <div className="h-[50%] text-7xl font-custom font-semibold">
          5.Jupiter
        </div>
        <div className="h-[50%] font-light">
          Jupiter, the largest planet in our solar system, is a gas giant known
          for its immense size, powerful storms, and numerous moons.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        className="absolute h-[50%] w-[40%] top-[20rem] left-[5rem] flex flex-col text-white gap-[1rem] justify-around"
      >
        <div className="w-[50%] h-[35%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-8">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4.3rem] w-[4.3rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-3xl font-semibold">86.881 Miles</span>
          </div>
        </div>
        <div className="w-[50%] h-[35%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-8">
          <img src={Group2} alt="Group2" className="h-[4.3rem] w-[4.3rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Temperature</span>
            <span className="text-3xl font-semibold">-108° Celsius</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jupiter;
