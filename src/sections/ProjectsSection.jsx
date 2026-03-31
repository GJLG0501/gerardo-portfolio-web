import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title="Proyectos" subtitle="Experiencia Aplicada" />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
