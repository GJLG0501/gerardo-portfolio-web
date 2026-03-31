import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { profile } from '../data/profile';
import styles from './Contact.module.css';

const GithubIcon = ({size = 24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({size = 24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = ({size = 20}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <SectionTitle
            title="¿Listo para transformar datos en decisiones?"
            subtitle="Contacto"
            className={styles.centeredTitle}
          />

          <p className={`${styles.description} fade-in-up delay-2`}>
            Estoy abierto a nuevas oportunidades donde pueda aportar valor a través del análisis de datos,
            machine learning y visión estratégica. Ya sea que tengas un proyecto en mente,
            una oportunidad laboral o simplemente quieras hablar sobre tecnología y negocios,
            me encantaría conectar.
          </p>

          <div className={`${styles.actions} fade-in-up delay-3`}>
            <Button
              href={`mailto:${profile.email}?subject=Contacto%20desde%20tu%20portfolio`}
              variant="primary"
            >
              <MailIcon size={17} /> Enviar Mensaje
            </Button>
          </div>

          {/* Email visible y copiable */}
          <a
            href={`mailto:${profile.email}`}
            className={`${styles.emailDisplay} fade-in-up delay-3`}
          >
            {profile.email}
          </a>

          <div className={`${styles.socialLinks} fade-in-up delay-4`}>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
