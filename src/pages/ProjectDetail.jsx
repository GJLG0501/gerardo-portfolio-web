import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import styles from './ProjectDetail.module.css';

const GithubIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ArrowLeftIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Desplazar al principio de la página al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const isNarrative = project.extended?.narrative;

  return (
    <div className={`section ${styles.projectWrapper}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={`${styles.navigation} fade-in-up`}>
          <Link to="/#projects" className={styles.backLink}>
            <ArrowLeftIcon size={20} />
            <span>Volver a Proyectos</span>
          </Link>
        </div>

        <div className={styles.header}>
          <div className={`${styles.companyBadge} fade-in-up delay-1`}>
            {project.company}
          </div>
          <h1 className={`${styles.title} fade-in-up delay-1`}>{project.title}</h1>
          
          <div className={`${styles.stack} fade-in-up delay-2`}>
            {project.stack.map((tech, i) => (
              <span key={i} className={styles.techBadge}>{tech}</span>
            ))}
          </div>

          <p className={`${styles.context} fade-in-up delay-2`}>{project.context}</p>
          
          <div className={`fade-in-up delay-3 ${styles.actionButtons}`}>
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button href={project.githubUrl} variant="primary">
                <GithubIcon size={18} /> Ver en GitHub
              </Button>
            )}
          </div>
        </div>

        <div className={styles.content}>
          {/* Lógica de formato Legado (Proyectos 1 al 3) */}
          {!isNarrative && (
            <>
              <div className={`${styles.contentSection} fade-in-up delay-3`}>
                <h3>El Problema</h3>
                <p>{project.problem}</p>
                {project.extended?.background && (
                  <p className={styles.extendedText}>{project.extended.background}</p>
                )}
              </div>

              <div className={`${styles.contentSection} fade-in-up delay-4`}>
                <h3>Solución y Metodología</h3>
                <p>{project.solution}</p>
                {project.extended?.methodology && (
                  <ul className={styles.methodologyList}>
                    {project.extended.methodology.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={`${styles.contentSection} fade-in-up delay-4`}>
                <h3>Impacto y Resultados</h3>
                <p className={styles.impactHighlight}>{project.impact}</p>
                {project.extended?.results && (
                  <p className={styles.extendedText}>{project.extended.results}</p>
                )}
              </div>

              {project.extended?.images && project.extended.images.length > 0 && (
                <div className={`${styles.imageGallery} fade-in-up delay-4`}>
                  {project.extended.images.map((img, i) => (
                    <div key={i} className={styles.imagePlaceholder}>
                      <img src={img} alt={`Visualización de ${project.title}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
              
              {project.extended?.images && project.extended.images.length === 0 && (
                <div className={`${styles.emptyImageGallery} fade-in-up delay-4`}>
                  <div className={styles.placeholderBox}>
                    <span>[ Área reservada para futuras visualizaciones de datos ]</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Lógica de formato Narrativo / Presentación (TechoServe y futuros) */}
          {isNarrative && project.extended?.sections && (
            <div className={styles.narrativeContainer}>
              {project.extended.sections.map((section, idx) => (
                <div key={idx} className={`${styles.contentSection} ${styles.narrativeSection} fade-in-up`} style={{ animationDelay: `${Math.min((idx + 3) * 0.1, 0.8)}s` }}>
                  <h3>{section.title}</h3>
                  <p className={styles.extendedText}>{section.content}</p>
                  
                  {section.image && (
                    <figure className={styles.figure}>
                      <div className={styles.imagePlaceholder}>
                        <img src={section.image} alt={section.caption || section.title} loading="lazy" />
                      </div>
                      {section.caption && (
                        <figcaption className={styles.caption}>{section.caption}</figcaption>
                      )}
                      {section.interactiveUrl && (
                        <div className={styles.interactiveAction}>
                          <a 
                            href={section.interactiveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.interactiveBtn}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            {section.interactiveLabel || 'Ver versión interactiva'}
                          </a>
                        </div>
                      )}
                    </figure>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
      <div className={styles.glowOverlay}></div>
    </div>
  );
};

export default ProjectDetail;
