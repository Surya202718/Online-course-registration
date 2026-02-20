import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/CourseList.css';

const CourseList = ({ user, courses, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Get unique departments
  const departments = ['all', ...new Set(courses.map(c => c.department))];

  // Filter courses based on search and department
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || course.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="course-list-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="course-list-content">
        <h1>Available Courses</h1>
        
        <div className="filters">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <select 
            value={filterDepartment} 
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="filter-select"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-item">
              <div className="course-header">
                <h3>{course.code}</h3>
                <span className="credits-badge">{course.credits} Credits</span>
              </div>
              <h4>{course.name}</h4>
              <p className="course-description">{course.description}</p>
              <div className="course-details">
                <p><strong>Faculty:</strong> {course.faculty}</p>
                <p><strong>Department:</strong> {course.department}</p>
                <p><strong>Schedule:</strong> {course.day}, {course.time}</p>
                <p><strong>Room:</strong> {course.room}</p>
                <p><strong>Capacity:</strong> {course.enrolled}/{course.capacity}</p>
              </div>
              <div className="availability">
                {course.enrolled < course.capacity ? (
                  <span className="available">Available</span>
                ) : (
                  <span className="full">Full</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="no-results">No courses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
