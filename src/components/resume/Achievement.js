import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Honors & Awards</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Founders' Choice Award at CacheHo Hackathon"
            subTitle="Recognition for Innovative Solutions"
            result="Achievement"
            des="Awarded for exceptional problem-solving skills and innovative solutions at the CacheHo Hackathon."
          />
          <ResumeCard
            title="Academic Topper in CSE (AI&DS)"
            subTitle="Vignan’s Institute of Information Technology"
            result="Achievement"
            des="Recognized as the top student in Computer Science Engineering with a focus on AI and Data Science."
          />
          <ResumeCard
            title="Highest Scorer in First Board Examination"
            subTitle="Sri Chaitanya Junior College"
            result="Achievement"
            des="Achieved the highest score in the first board examination, demonstrating academic excellence."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Achievement;

