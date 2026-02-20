import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import '../../styles/Dashboard.css';

const AdminDashboard = ({ user, courses, students, onLogout }) => {
  const navigate = useNavigate();

  // Calculate statistics
  const totalCourses = courses.length;
  const totalStudents = students.length;
  const totalEnrollments = students.reduce((sum, student) => 
    sum + (student.enrolledCourses ? student.enrolledCourses.length : 0), 0
  );

  return (
    <div className="dashboard-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Courses</h3>
            <p className="stat-number">{totalCourses}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Students</h3>
            <p className="stat-number">{totalStudents}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Enrollments</h3>
            <p className="stat-number">{totalEnrollments}</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={() => navigate('/admin/add-course')} className="action-btn">
              Add New Course
            </button>
            <button onClick={() => navigate('/admin/manage-courses')} className="action-btn">
              Manage Courses
            </button>
            <button onClick={() => navigate('/admin/assign-faculty')} className="action-btn">
              Assign Faculty & Timing
            </button>
            <button onClick={() => navigate('/admin/registrations')} className="action-btn">
              View Registrations
            </button>
          </div>
        </div>

        <div className="recent-courses">
          <h2>Recent Courses</h2>
          <div className="course-table">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Faculty</th>
                  <th>Enrolled</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {courses.slice(0, 5).map(course => (
                  <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>{course.faculty}</td>
                    <td>{course.enrolled}</td>
                    <td>{course.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
