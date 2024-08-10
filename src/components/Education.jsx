import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section className="pt-8" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-4xl font-bold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className={`p-10`}
        >
          <h3 className={`text-xl font-semibold lg:text-2xl`}>{edu.degree}</h3>
          <br />
          <p className="text-lg">{edu.institution}</p>
          <p className="text-sm text-stone-300">{edu.duration}</p>
          <br />
          <p>{edu.description}</p>
          <p
            className={`px-10 pt-10 border-b-2 border-stone-50/30 ${
              EDUCATION.length - 1 === index && "border-none"
            }`}
          ></p>
        </motion.div>
      ))}
    </section>
  );
};
export default Education;
