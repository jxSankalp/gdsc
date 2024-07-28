import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Group3, Layer2, sun, donut_large } from "../assets/sun/sun";
const Sun = () => {
  const main = useRef(null);
  const inview = useInView(main , {once:true});

  return (
    <>
      <div id="Sun" className="w-full h-screen relative overflow-hidden ">
        <img
          src={sun}
          alt="Sun"
          className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
        />
        <motion.img
          animate={{ y: inview ? "-4rem" : "-40rem" }}
          transition={{ stiffness: 15, type: "spring" }}
          src={Layer2}
          alt="Layer2"
          className="absolute left-[0rem] h-[69vh] w-[105vw] object-cover z-0"
        />
        <motion.div
          animate={{ opacity: inview ? 1 : 0 }}
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 2, delay: 1.2, ease: "linear" }}
          className="absolute bg-transparent h-[20%] w-[60%] top-[15vw] md:top-[20rem] lg:top-[30rem] left-[5rem] flex flex-col text-white"
          ref={main}
        >
          <div className="h-[50%] text-6xl font-custom font-semibold">.Sun</div>
          <div className="h-[50%] font-light">
            The Sun is a huge, glowing ball of hot plasma at the centre of our
            solar system and provides the vital energy needed for life on Earth.
            This energy radiates outward in the form of light and heat,
            providing warmth and light to the entire solar system.
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: inview ? 1 : 0 }}
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 2, delay: 1.2, ease: "linear" }}
          className="absolute h-[15%] w-[80%] lg:w-[40%] md:w-[70%] top-[57vh] lg:top-[43rem] md:top-[35rem] left-[20vw] lg:left-[5rem] md:left-[5rem] flex flex-col md:flex-row text-white gap-10 justify-around"
        >
          <div className="w-[80%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
            <img
              src={donut_large}
              alt="donut_large"
              className="h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem]"
            />
            <div className="flex flex-col gap-1 font-custom ">
              <span>Diameter</span>
              <span className="text-xl md:text-2xl">870000 Miles</span>
            </div>
          </div>
          <div className="w-[80%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2">
            <img src={Group3} alt="Group3" className="h-[4rem] w-[4rem]" />
            <div className="flex flex-col gap-1 font-custom ">
              <span>Temperature</span>
              <span className="text-2xl">±5,500° Celsius</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sun;
