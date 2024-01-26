import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Timelines } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TimelineCard = ({ Timeline }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0F0F0F",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Timeline.date}
      iconStyle={{ background: Timeline.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full"></div>
      }>
      <div>
        <h3 className="text-white text-[18px] font-bold">{Timeline.title}</h3>
        <p
          className="text-secondary text-[12px] font-semibold"
          style={{ margin: 0 }}>
          {Timeline.company_name}
        </p>
      </div>

      <ul className="mt-2 list-disc ml-5 space-y-1">
        {Timeline.points.map((point, index) => (
          <li
            key={`Timeline-point-${index}`}
            className="text-white-100 text-[12px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Have a look at the
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Event Timeline.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline>
          {Timelines.map((Timeline, index) => (
            <TimelineCard key={`Timeline-${index}`} Timeline={Timeline} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "work");
