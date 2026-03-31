import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';
import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle title="Habilidades" subtitle="Stack Técnico y Analítico" />
        
        <div className={styles.grid}>
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className={`${styles.skillGroup} fade-in-up`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              <div className={styles.itemsWrapper}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} className={styles.item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
