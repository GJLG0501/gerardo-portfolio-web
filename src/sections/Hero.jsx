import React from 'react';
import { profile } from '../data/profile';
import Button from '../components/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`${styles.badge} fade-in-up delay-1`}>
            {profile.name} — {profile.role}
          </div>
          <h1 className={`${styles.headline} fade-in-up delay-2`}>
            {profile.headline}
          </h1>
          <p className={`${styles.subheadline} fade-in-up delay-3`}>
            {profile.subheadline}
          </p>
          <div className={`${styles.actions} fade-in-up delay-4`}>
            <Button href="#projects" variant="primary">Ver Proyectos</Button>
            <Button href="#contact" variant="secondary">Contactar</Button>
          </div>
        </div>
      </div>
      <div className={styles.glowOverlay}></div>
    </section>
  );
};

export default Hero;
