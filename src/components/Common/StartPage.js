import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <div className="start-content">
        <h1>🎓 Online Course Registration System</h1>
        <p className="subtitle">Select, Schedule, and Manage Your Courses</p>
        
        <div className="features">
          <div className="feature">
            <span className="icon">📚</span>
            <h3>Browse Courses</h3>
            <p>Explore available courses</p>
          </div>
          <div className="feature">
            <span className="icon">⚡</span>
            <h3>Instant Enrollment</h3>
            <p>Register with one click</p>
          </div>
          <div className="feature">
            <span className="icon">📅</span>
            <h3>Smart Scheduling</h3>
            <p>Automatic conflict detection</p>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/signup')} className="btn-primary">
            Create Account
          </button>
          <button onClick={() => navigate('/login')} className="btn-secondary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
