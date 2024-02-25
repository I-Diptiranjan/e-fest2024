import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { Speakers } from "../../constants";

const SpeakerCard = ({ index, about, name, designation, company, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[310px] w-full">
      <div className="relative w-full h-[230px] flex justify-center">
        <img
          src={image}
          alt="project_image"
          className="w-48 h-48 object-center rounded-2xl "
        />
      </div>

      <div className="mt-0">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <h5 className="text-white font-bold text-[13px]">
          {designation} , {company}
        </h5>
        <p className="mt-2 text-secondary text-[12px] text-justify">{about}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Speaker = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-[tertiary] rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Glad to have our</p>
          <h2 className={styles.sectionHeadText}>Guest Speakers.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-8 ${styles.paddingX} flex flex-wrap gap-7`}>
        {Speakers.map((about, index) => (
          <SpeakerCard key={about.name} index={index} {...about} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Speaker, "speaker");
