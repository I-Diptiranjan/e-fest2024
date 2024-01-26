import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { Events } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EventCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[260px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary group min-h-[260px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-full h-[275px] object-cover"
        />

        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 border-red">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Event = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Presenting you the Great</p>
        <h2 className={styles.sectionHeadText}>Events</h2>
      </motion.div>
      <div className="mt-4 flex flex-wrap gap-6">
        {Events.map((Event, index) => (
          <EventCard key={Event.title} index={index} {...Event} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Event, "event");
