import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => (
  <motion.div
    className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 flex flex-col justify-center gap-6 shadow-shadowOne group"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col justify-between gap-4">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
          {title}
        </h3>
        <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
          Skills
        </p>
      </div>
      <ul className="list-disc pl-5 mt-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm text-gray-400 group-hover:text-gray-300 duration-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: ['C', 'Python', 'Java', 'R'] },
    { title: 'Web Development', skills: ['JavaScript (including jQuery)', 'React.js', 'HTML 5', 'CSS', 'Flask', 'Django'] },
    { title: 'Database Management', skills: ['Oracle-SQL', 'MySQL', 'Big Data (Hadoop)', 'Tableau'] },
    { title: 'Modeling & UI Design Tools', skills: ['UML', 'Figma', 'MS Office'] },
    { title: 'Operating Systems', skills: ['Windows', 'Unix/Linux'] },
    { title: 'AI & Data Science', skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'Predictive Modelling', 'Data Mining'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;



