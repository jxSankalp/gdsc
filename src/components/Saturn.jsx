import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { saturn, Group, Group2, donut_large } from "../assets/saturn/saturn";

const Saturn = () => {

  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div id="Saturn" className="w-full h-screen relative overflow-hidden ">
      <img
        src={saturn}
        alt="saturn"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "0rem" : "-40rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Group}
        alt="Group"
        className="absolute h-[46.5rem] top-[3rem] w-[54.5rem] object-cover z-[1]"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[40%] top-[5rem] left-[45vw] flex flex-col text-white text-end z-[3]"
        ref={main}
      >
        <div className="h-[50%] text-7xl font-custom font-semibold">
          6.Saturn
        </div>
        <div className="h-[50%] font-light">
          Saturn, often referred to as the "Ringed Planet," is known for its
          stunning system of rings that encircle the planet's equator. It's the
          sixth planet from the Sun and is one of the most visually distinctive
          objects in our solar system, with more than 80 known satellites.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute h-[32%] w-[19vw] left-[65vw] top-[20rem] flex text-white gap-12 justify-around flex-wrap z-[3] "
      >
        <div className="w-full h-[50%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4rem] w-[4rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-4xl font-semibold">74.898 Miles</span>
          </div>
        </div>
        <div className="w-full h-[50%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img src={Group2} alt="Group2" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Temperature</span>
            <span className="text-4xl font-semibold">-139° Celsius</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Saturn;
