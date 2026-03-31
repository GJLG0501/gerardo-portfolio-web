import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', href, to, onClick, className = '' }) => {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={btnClass}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={btnClass}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
