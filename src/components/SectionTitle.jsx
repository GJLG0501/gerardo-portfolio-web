import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`${styles.header} ${className} fade-in-up`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default SectionTitle;
