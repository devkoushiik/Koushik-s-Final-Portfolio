import { HERO } from "../constants";
import koushikImg from "../assets/koushik.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <p className="mt-6 p-3 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mt-4 font-light text-xl p-4">I am, </p>
        <div className="flex items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-3 text-4xl font-bold lg:my-3 lg:p-2 md:text-[2.8rem] capitalize lg:text-[7rem]"
          >
            {HERO.name}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-[14px] md:mt-[17.5px] md:text-lg lg:mt-[65px]"
          >
            {HERO.lastName}
          </motion.span>
        </div>

        <p className="mb-8 p-3 text-xl">{HERO.description}</p>
        <div className="flex justify-center bg-stone-100/20 mb-6 py-4 text-white w-[12rem] md:w-1/2 items-center md:mx-auto rounded-full">
          <a href="/cv.pdf" download>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Download CV
            </motion.button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:p-8 flex justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-end"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={koushikImg}
            width={550}
            height={550}
            alt="Koushik Ahmed"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
