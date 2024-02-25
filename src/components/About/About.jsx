import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";

import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>E-FEST 6.0</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] text-justify">
        The Entrepreneurship Development Cell (ED Cell) at SiliconTech, was
        established in 2011 to encourage and promote entrepreneurship among
        students. The cell is supported by the All India Council for Technical
        Education (AICTE) and the Department of Science & Technology (DST),
        Government of India. Its mission is to create an enabling environment
        for entrepreneurial innovation, provide opportunities for
        selfemployment, and train students to have an intrapreneurial mindset
        for future workplaces. The EDC offers access to affordable co-working
        spaces, mentoring, training, and funding to incubatees. It also hosts
        various entrepreneurship development programs, including the Women
        Entrepreneurship Development Program and the Technology Entrepreneurship
        Development Program. The E-FEST is its flagship event that celebrates
        entrepreneurship and honors entrepreneurs. The EDC's work is anchored by
        SiliconTech's Business Incubator and Institute Innovation Council, which
        promote entrepreneurship within the institute and in Odisha.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
