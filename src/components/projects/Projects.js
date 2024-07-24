import React from 'react';
import Title from '../layouts/Title';
import { recyloImage, smartCarParkingImage, traducaoImage, judxImage, peoplesAgronomyImage } from "../../assets/index"; // Ensure these paths are correct
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Recyclo"
          des="A recycling management system designed to enhance recycling efficiency and promote sustainable practices."
          src={recyloImage} // Ensure this image path is correct
          githubLink="https://github.com/sruthi-karanam/Recyclo" // Add the correct GitHub link
        />
        <ProjectsCard
          title="Smart Car Parking System"
          des="An intelligent parking solution that optimizes parking space allocation and enhances user convenience."
          src={smartCarParkingImage} // Ensure this image path is correct
          githubLink="https://photos.app.goo.gl/QjnMhMjVoSJSCP847" // Add the correct GitHub link
        />
        <ProjectsCard
          title="Traducao"
          des="A comprehensive translation application providing seamless language translation and linguistic support."
          src={traducaoImage} // Ensure this image path is correct
          githubLink="https://github.com/sruthi-karanam/Traducao-Subtitles-generator-along-with-automatic-translation-" // Add the correct GitHub link
        />
        <ProjectsCard
          title="JUD-X"
          des="A dynamic project focused on innovative solutions and advanced technology integration."
          src={judxImage} // Ensure this image path is correct
          githubLink="https://github.com/sruthi-karanam/JudX-judiciary-based" // Add the correct GitHub link
        />
        <ProjectsCard
          title="People’s Agronomy"
          des="A project aimed at enhancing agricultural practices through technology and data analysis."
          src={peoplesAgronomyImage} // Ensure this image path is correct
          githubLink="https://github.com/sruthi-karanam/People-s-Agronomy" // Add the correct GitHub link
        />
      </div>
    </section>
  );
}

export default Projects;

