import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { profile, certifications } from '../data/profile';
import styles from './Education.module.css';

const education = profile.education;

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const Education = () => {
  return (
    <section id="education" className={`section ${styles.educationSection}`}>
      <div className="container">
        <SectionTitle title="Educación y Certificaciones" subtitle="Background" />

        {/* Timeline — formación académica */}
        <div className={styles.timeline}>
          {education.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.institution}>{item.institution}</h3>
                <p className={styles.degree}>{item.degree}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificaciones — bloque compacto */}
        <div className={`${styles.certBlock} fade-in-up`} style={{ animationDelay: '0.3s' }}>
          <span className={styles.certLabel}>Certificaciones</span>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certItem}>
                <span className={styles.certIcon}><CheckIcon /></span>
                <div className={styles.certInfo}>
                  <span className={styles.certTitle}>{cert.title}</span>
                  <span className={styles.certMeta}>{cert.issuer} · {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
