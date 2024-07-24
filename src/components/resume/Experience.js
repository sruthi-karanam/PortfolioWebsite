import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Internships */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Salesforce Developer & Administrator"
            subTitle="Salesforce (Smartinternz) (2022)"
            result="Remote"
            des="Gained experience in Salesforce development and administration, including customization and configuration."
          />
          <ResumeCard
            title="Oracle DB (SQL) & Java Intern"
            subTitle="IT Wing, APEPDCL (2021)"
            result="On-site"
            des="Worked with SQL and Java technologies, contributing to database management and application development."
          />
          <ResumeCard
            title="AI Intern"
            subTitle="Cognizance IIT Roorkee (2023)"
            result="Remote"
            des="Worked on projects related to AI and machine learning, focusing on hands-on implementation and problem-solving."
          />
        </div>
      </div>
      {/* Certifications */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PCAP - Programming Essentials in Python"
            subTitle="Cisco Netcad"
            result="Completed"
            des="Certification in Python programming fundamentals and essentials."
          />
          <ResumeCard
            title="CCNAv7: Introduction to Networks"
            subTitle="Cisco Netcad"
            result="Completed"
            des="Certification covering the basics of networking and Cisco technologies."
          />
          <ResumeCard
            title="Data Science with Python"
            subTitle="IIT Guwahati"
            result="Completed"
            des="Certification focusing on data science techniques and Python programming for data analysis."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
