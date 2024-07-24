import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiPython } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Bring to the Table" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Data Science Expertise"
          des="Hands-on experience in data analysis, predictive modeling, and data mining, using tools such as Python, R, and Tableau."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Full Stack Development"
          des="Experienced in developing end-to-end web applications using JavaScript, React.js, HTML, CSS, Flask, and Django."
          icon={<FaMobile />}
        />
        <Card
          title="Programming Languages"
          des="Proficient in C, Python, Java, and R for developing robust software solutions."
          icon={<SiPython />}
        />
        <Card
          title="UI/UX Design with Figma"
          des="Skilled in creating intuitive and visually appealing user interfaces and experiences using Figma and UML."
          icon={<SiAntdesign />}
        />
        <Card
          title="Project Management Acumen"
          des="Capable of leading projects like Recyclo and JUD-X from inception to completion, ensuring timely delivery and alignment with objectives."
          icon={<FaGlobe />}
        />
        <Card
          title="Effective Communication"
          des="Proficient in conveying technical concepts clearly and effectively to diverse audiences, fostering collaboration and understanding."
          icon={<SiProgress />}
        />
        <Card
          title="Machine Learning Proficiency"
          des="Experience in designing and deploying predictive models and working on projects like Traducao and People’s Agronomy."
          icon={<AiFillAppstore />}
        />
      </div>
    </section>
  );
}

export default Features;
