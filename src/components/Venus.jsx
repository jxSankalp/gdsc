import React , {useRef} from "react";
import { motion , useInView} from "framer-motion";
import { venus, Group, Group3, donut_large } from "../assets/venus/venus";

const Venus = () => {

  const main = useRef(null);
  const inview = useInView(main, { once: true });

  return (
    <div className="w-full h-screen relative overflow-hidden ">
      <img
        src={venus}
        alt="venus"
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover z-[-1]"
      />
      <motion.img
        animate={{ x: inview ? "50vw" : "150rem" }}
        transition={{ stiffness: 15, type: "spring" }}
        src={Group}
        alt="Group"
        className="absolute top-[-3rem] w-[48rem] h-[58rem]"
      />
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute bg-transparent h-[20%] w-[80%] md:w-[40%] top-[2rem] md:top-[6rem] left-[3rem] md:left-[5rem] flex flex-col gap-8 text-white"
        ref={main}
      >
        <div className="h-[50%] text-3xl md:text-7xl font-custom font-semibold">
          2.Venus
        </div>
        <div className="h-[50%] font-light">
          Venus is often referred to as Earth's "sister planet" due to its
          similar size and composition, but it stands out with its extremely
          inhospitable environment
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: inview ? 1 : 0 }}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2, delay: 1.2, ease: "linear" }}
        className="absolute h-[40%] min-w-[25rem] md:min-w-[35rem] top-[17rem] md:top-[20rem] left-[3rem] md:left-[5rem] flex flex-col text-white  md:gap-[1rem] justify-around"
      >
        <div className="w-[50%] h-[45%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-8">
          <img
            src={donut_large}
            alt="donut_large"
            className="h-[3rem] w-[3rem]"
          />
          <div className="flex flex-col gap-1 font-custom ">
            <span>Diameter</span>
            <span className="text-xl md:text-3xl font-semibold">
              7,521 Miles
            </span>
          </div>
        </div>
        <div className="w-[50%] h-[45%] border-2 rounded-2xl border-[rgb(106,50,126)] bg-gradient-to-br from-[rgb(24,12,36)] to-[rgb(80,33,97)] flex justify-center items-center gap-4 p-2 pl-8">
          <img src={Group3} alt="Group3" className="h-[4.3rem] w-[4.3rem]" />
          <div className="flex flex-col gap-1 font-custom">
            <span className="text-xs">Temperature</span>
            <span className="text-xl md:text-3xl font-semibold">
              ±475° Celsius
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Venus;
