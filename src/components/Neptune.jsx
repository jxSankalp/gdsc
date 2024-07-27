import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  neptune,
  Group2,
  donut_large,
  footer,
  circle,
} from "../assets/neptune/neptune";
import Footer from "./Footer";

const Neptune = () => {
  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div className="w-full h-[150vh] relative overflow-hidden ">
      <img
        src={neptune}
        alt="neptune"
        className="absolute top-0 left-0 h-[100vh] w-[100%] object-cover z-[-1]"
      />
      <img
        src={footer}
        alt="footer"
        className="absolute top-[100vh] left-0 h-[50vh] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "-28vw" : "-100vw" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={circle}
        alt="circle"
        className="absolute top-[-73vh] w-[96rem] h-[186rem] z-[1]"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.2, delay: 1.6, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[40%] top-[5rem] left-[28rem] flex flex-col text-white text-center"
      >
        <div className="h-[40%] text-6xl font-custom font-semibold ">
          8.Neptune
        </div>
        <div className="h-[60%] font-light">
          Neptune, often called the "Blue Giant," is the eighth and farthest
          planet from the Sun in our solar system. It is a gas giant known for
          its striking blue color and turbulent atmosphere.
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.2, delay: 1.6, ease: "linear" }}
        className="absolute h-[40%] w-[20%] top-[14rem] left-[72rem] flex flex-col text-white gap-[1rem] justify-around"
        ref={main}
      >
        <div className="w-full h-[30%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[4rem] w-[4rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-3xl font-semibold">30,775 Miles</span>
          </div>
        </div>
        <div className="w-full h-[30%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-6">
          <img src={Group2} alt="Group2" className="h-[4rem] w-[4rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Temperature</span>
            <span className="text-3xl font-semibold">-218° Celsius</span>
          </div>
        </div>
      </motion.div>
      <div className="absolute top-[100vh] left-[0vw] w-full h-[50vh] bg-transparent z-10 flex justify-center items-center">
        <Footer/>
      </div>
    </div>
  );
};

export default Neptune;
