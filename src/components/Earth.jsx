import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  earth,
  Group,
  Group1,
  Group5,
  Layer2,
  donut_large,
} from "../assets/earth/earth";

const Earth = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div id="Earth" className="w-full h-screen relative overflow-hidden">
      <img
        src={earth}
        alt="earth"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ y: inview ? "45vh" : "150rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Layer2}
        alt="Layer2"
        className="absolute h-[32rem] lg:left-[10vw] w-[100vw] lg:w-[80vw] earth:w-[80vw] object-cover z-[2]"
      />
      <motion.img
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        src={Group1}
        alt="Group1"
        className="absolute top-[20rem] left-[62rem] h-[9rem] w-[10rem] object-cover z-[-1]"
      />
      <motion.img
        animate={{ y: inview ? "28rem" : "150rem" }}
        transition={{ stiffness: 15, type: "spring", delay: 0.7 }}
        src={Group5}
        alt="Group5"
        className="absolute left-[0rem] lg:left-[7vw] h-[28rem] w-[100vw] lg:w-[85vw] object-cover z-[2]"
      />
      <motion.img
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 1.7, ease: "linear" }}
        src={Group}
        alt="Group"
        className="absolute top-[28rem] left-[0rem] h-[9rem] w-[8.2rem] object-cover z-[1] hidden md:block"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.7, delay: 2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[90%] md:w-[40%] lg:md-[60%] top-[5rem] left-[2rem] flex flex-col text-white"
        ref={main}
      >
        <div className="h-[40%] text-5xl md:text-6xl font-custom font-semibold">
          3.Earth
        </div>
        <div className="h-[60%] font-light">
          Earth is the third planet from the Sun and the only known planet to
          support life. Earth is the only planet known to harbor life. It's a
          diverse and dynamic world with a wide range of ecosystems, climates,
          and geological features.
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "10rem", opacity: 0 }}
        animate={{ x: inview ? "22rem" : "10rem", opacity: inview ? 1 : 0 }}
        transition={{ duration: 2.2, delay: 2, ease: "linear" }}
        className="absolute bg-transparent h-[15%] w-[40%] top-[20rem] md:flex flex-col text-white text-end hidden"
      >
        <div className="h-[40%] text-4xl font-custom font-semibold ">
          Moon Planet
        </div>
        <div className="h-[60%] font-light">
          Earth has one natural satellite, the Moon, which plays a role in
          stabilizing the planet's rotation and tides. The Moon's gravitational
          pull causes ocean tides to rise and fall.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.4, delay: 1.6, ease: "linear" }}
        className="absolute w-[18rem] h-[8rem] top-[5rem] left-[64rem] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-7"
      >
        <img
          src={donut_large}
          alt="donut_large"
          className="h-[4rem] w-[4rem]"
        />
        <div className="flex flex-col gap-1 font-custom text-white">
          <span className="text-xs">Diameter</span>
          <span className="text-3xl font-semibold">7,918 Miles</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Earth;
