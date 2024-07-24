import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in CSE (AI&DS)"
            subTitle="Vignan’s Institute of Information Technology (2021 - 2025)"
            result="CGPA: 9.4/10"
            des="Pursuing a Bachelor’s degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Data Science."
          />
          <ResumeCard
            title="Intermediate MPC"
            subTitle="Sri Chaitanya Junior College (2019 - 2021)"
            result="97%"
            des="Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry."
          />
          <ResumeCard
            title="SSC"
            subTitle="The Presidential School (Completed in 2019)"
            result="Grade: 10/10"
            des="Completed Secondary School Certificate with top grades."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Education;

