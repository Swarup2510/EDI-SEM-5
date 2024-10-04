import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Your Training Dashboard</h1>
      </div>
      <p style={styles.introText}>
        Welcome! Below are your personalized training recommendations to help you grow and succeed in your career.
      </p>
      <div style={styles.coursesContainer}>
        <div style={styles.courseCard}>
          <h3 style={styles.courseTitle}>Course Title 1</h3>
          <p style={styles.courseDescription}>Brief description of what this course covers.</p>
        </div>
        <div style={styles.courseCard}>
          <h3 style={styles.courseTitle}>Course Title 2</h3>
          <p style={styles.courseDescription}>Brief description of what this course covers.</p>
        </div>
        <div style={styles.courseCard}>
          <h3 style={styles.courseTitle}>Course Title 3</h3>
          <p st yle={styles.courseDescription}>Brief description of what this course covers.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f0f4f7',
    minHeight: '100vh',
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    backgroundColor: '#007bff',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
  },
  introText: {
    fontSize: '18px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  coursesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  courseCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  courseTitle: {
    fontSize: '22px',
    color: '#007bff',
  },
  courseDescription: {
    fontSize: '16px',
    color: '#333',
  },
};

export default Dashboard;
