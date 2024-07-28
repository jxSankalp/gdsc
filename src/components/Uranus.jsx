import React , { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Group2 , Group , Layer2 , donut_large , uranus } from '../assets/uranus/uranus'

const Uranus = () => {

    const main = useRef(null);
    const inview = useInView(main, { once: true });

  return (
    <div id="Uranus" className="w-full h-screen relative overflow-hidden">
      <img
        src={uranus}
        alt="uranus"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ y: inview ? "27.5rem" : "150rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Layer2}
        alt="Layer2"
        className="absolute h-[27.5rem] w-[76.5rem] left-[15rem] object-cover z-[2]"
      />
      <motion.img
        animate={{ y: inview ? "29.5rem" : "150rem" }}
        transition={{ stiffness: 15, type: "spring", delay: 0.7 }}
        src={Group}
        alt="Group"
        className="absolute h-[25.5rem] w-[68.5rem] left-[22rem] object-cover z-[2]"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.2, delay: 1.6, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[40%] top-[5rem] left-[2rem] flex flex-col text-white"
        ref={main}
      >
        <div className="h-[40%] text-6xl font-custom font-semibold">
          7.Uranus
        </div>
        <div className="h-[60%] font-light">
          Uranus, often referred to as the "Ice Giant," is a unique and
          mysterious planet in our solar system. It stands out due to its
          distinct blue-green color and its unusual rotation axis.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.2, delay: 1.6, ease: "linear" }}
        className="absolute h-[15%] w-[40%]  top-[5rem] left-[50rem] flex text-white gap-3 justify-around"
      >
        <div className="w-[40%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4rem] w-[4rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-3xl font-semibold">31,518 Miles</span>
          </div>
        </div>
        <div className="w-[40%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
          <img src={Group2} alt="Group2" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Temperature</span>
            <span className="text-3xl font-semibold">-224° Celsius</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Uranus