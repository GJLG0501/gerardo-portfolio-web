import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
