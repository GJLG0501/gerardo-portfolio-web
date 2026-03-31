import React from 'react';
import { profile } from '../data/profile';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoMark}>G. LÓPEZ</div>
        <p className={styles.text}>
          © {year} {profile.name}. Todos los derechos reservados.
        </p>
        <p className={styles.subtext}>
          Diseñado y construido con precisión.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
