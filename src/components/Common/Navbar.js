import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const isStudent = user.role === 'student';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Course Registration</h2>
      </div>
      
      <div className="navbar-links">
        {isStudent ? (
          <>
            <Link to="/student/dashboard">Dashboard</Link>
            <Link to="/student/courses">Courses</Link>
            <Link to="/student/select-courses">Select Courses</Link>
            <Link to="/student/schedule">My Schedule</Link>
          </>
        ) : (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/add-course">Add Course</Link>
            <Link to="/admin/manage-courses">Manage Courses</Link>
            <Link to="/admin/assign-faculty">Assign Faculty</Link>
            <Link to="/admin/registrations">Registrations</Link>
          </>
        )}
      </div>

      <div className="navbar-user">
        <span>Welcome, {user.name}</span>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
