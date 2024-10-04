import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>SkillForge</h1>
        <div style={styles.authLinks}>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.registerButton}>Register</Link>
        </div>
      </header>

      <main style={styles.mainContent}>
        <h2 style={styles.mainHeading}>Welcome to Your Personalized Training Platform</h2>
        <p style={styles.mainDescription}>
          Our platform provides personalized training recommendations tailored to your unique career goals.
          Enhance your skills, track your progress, and achieve your career objectives.
        </p>
        <Link to="/dashboard" style={styles.button}>Go to Dashboard</Link>
      </main>

      <footer style={styles.footer}>
        <h3 style={styles.footerHeading}>About Our Platform</h3>
        <p style={styles.footerDescription}>
          This platform uses advanced AI algorithms to analyze your skills, job role, and learning preferences 
          to provide you with the most relevant training materials. Whether you want to enhance your current skills 
          or learn something new, we’ve got you covered.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: '"Roboto", sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a73e8',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  authLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease',
  },
  registerButton: {
    backgroundColor: '#ffffff',
    color: '#1a73e8',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    border: '2px solid #1a73e8',
    transition: 'background-color 0.3s ease',
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(to bottom right, #ffffff, #e0f2ff)',
  },
  mainHeading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '20px',
  },
  mainDescription: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '30px',
    padding: '15px 30px',
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '30px 20px',
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  footerDescription: {
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Homepage;
