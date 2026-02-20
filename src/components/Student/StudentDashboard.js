import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import '../../styles/Dashboard.css';

const StudentDashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const enrolledCourses = user.enrolledCourses || [];

  return (
    <div className="dashboard-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="dashboard-content">
        <h1>Student Dashboard</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Enrolled Courses</h3>
            <p className="stat-number">{enrolledCourses.length}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Credits</h3>
            <p className="stat-number">
              {enrolledCourses.reduce((sum, course) => sum + course.credits, 0)}
            </p>
          </div>
          
          <div className="stat-card">
            <h3>Student ID</h3>
            <p className="stat-number">{user.id}</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={() => navigate('/student/courses')} className="action-btn">
              View All Courses
            </button>
            <button onClick={() => navigate('/student/select-courses')} className="action-btn">
              Select Courses
            </button>
            <button onClick={() => navigate('/student/schedule')} className="action-btn">
              View My Schedule
            </button>
          </div>
        </div>

        <div className="enrolled-courses-section">
          <h2>My Enrolled Courses</h2>
          {enrolledCourses.length === 0 ? (
            <p className="no-courses">No courses enrolled yet. Start selecting courses!</p>
          ) : (
            <div className="course-cards">
              {enrolledCourses.map(course => (
                <div key={course.id} className="course-card">
                  <h3>{course.code}</h3>
                  <p className="course-name">{course.name}</p>
                  <p><strong>Faculty:</strong> {course.faculty}</p>
                  <p><strong>Schedule:</strong> {course.day} {course.time}</p>
                  <p><strong>Credits:</strong> {course.credits}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
