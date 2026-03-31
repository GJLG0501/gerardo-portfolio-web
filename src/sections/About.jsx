import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/profile';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.container}`}>
        <SectionTitle title="Acerca de mí" subtitle="Perfil" />
        <div className={styles.grid}>
          <div className={`${styles.textContent} fade-in-up delay-2`}>
            <p>{profile.about}</p>
          </div>
          <div className={`${styles.stats} fade-in-up delay-3`}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Data</span>
              <span className={styles.statLabel}>Driven</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>B2+</span>
              <span className={styles.statLabel}>Inglés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
