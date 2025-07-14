// src/components/DashboardPlaceholder.jsx
import React from 'react';
import { signOut } from '../utils/auth';

export default function DashboardPlaceholder() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Dashboard Under Creation</h1>
        <p style={styles.paragraph}>
          We're crafting an insightful experience for you. Please check back soon!
        </p>
        <div style={styles.spinner}></div>
        <div style={styles.btnContainer}>
          <button style={styles.btn} onClick={() => signOut()}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Inter', sans-serif",
    color: '#333',
    margin: 0,
    textAlign: 'center',
    overflow: 'hidden',
  },
  container: {
    padding: '2.5rem 2rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '550px',
    width: '90%',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '2.8em',
    marginBottom: '0.5rem',
    color: '#2c3e50',
    letterSpacing: '-0.02em',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    color: '#555',
  },
  spinner: {
    border: '8px solid #e0e0e0',
    borderTop: '8px solid #4a90e2',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    animation: 'spin 1.5s linear infinite',
    margin: '0 auto',
  },
  btnContainer: {
    paddingTop: '2rem',
  },
  btn: {
    fontWeight: '900',
    padding: '0.1rem 2rem',
    borderRadius: '1rem',
    backgroundColor: '#8d7eca',
    color: 'white',
    border: 'none',
  }
};

// Inject keyframe animation globally (you can also move this to a global CSS if preferred)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`,
  styleSheet.cssRules.length
);
