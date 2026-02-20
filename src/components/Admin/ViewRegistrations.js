import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/AdminForms.css';

const ViewRegistrations = ({ courses, students, onLogout }) => {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState('all');

  // Get students enrolled in a specific course
  const getEnrolledStudents = (courseId) => {
    return students.filter(student => 
      student.enrolledCourses && 
      student.enrolledCourses.some(c => c.id === courseId)
    );
  };

  // Get filtered registrations
  const getFilteredRegistrations = () => {
    let registrations = [];

    students.forEach(student => {
      if (student.enrolledCourses) {
        student.enrolledCourses.forEach(course => {
          registrations.push({
            studentId: student.id,
            studentName: student.name,
            studentEmail: student.email,
            courseId: course.id,
            courseCode: course.code,
            courseName: course.name,
            faculty: course.faculty,
            schedule: `${course.day}, ${course.time}`
          });
        });
      }
    });

    // Apply filters
    if (selectedCourse !== 'all') {
      registrations = registrations.filter(r => r.courseId === parseInt(selectedCourse));
    }

    if (selectedStudent !== 'all') {
      registrations = registrations.filter(r => r.studentId === parseInt(selectedStudent));
    }

    return registrations;
  };

  const registrations = getFilteredRegistrations();

  const user = { role: 'admin', name: 'Admin' };

  return (
    <div className="admin-form-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="admin-form-content">
        <h1>Student Registrations</h1>
        
        <div className="filters-section">
          <div className="form-row">
            <div className="form-group">
              <label>Filter by Course</label>
              <select 
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="all">All Courses</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.code} - {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Filter by Student</label>
              <select 
                value={selectedStudent} 
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                <option value="all">All Students</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="stats-summary">
          <div className="stat-item">
            <strong>Total Registrations:</strong> {registrations.length}
          </div>
        </div>

        <div className="courses-table">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Faculty</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center' }}>
                    No registrations found
                  </td>
                </tr>
              ) : (
                registrations.map((reg, index) => (
                  <tr key={index}>
                    <td>{reg.studentId}</td>
                    <td>{reg.studentName}</td>
                    <td>{reg.studentEmail}</td>
                    <td>{reg.courseCode}</td>
                    <td>{reg.courseName}</td>
                    <td>{reg.faculty}</td>
                    <td>{reg.schedule}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="course-enrollment-summary">
          <h2>Course Enrollment Summary</h2>
          <div className="courses-table">
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Enrolled Students</th>
                  <th>Capacity</th>
                  <th>Available Seats</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => {
                  const enrolledStudents = getEnrolledStudents(course.id);
                  return (
                    <tr key={course.id}>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>{enrolledStudents.length}</td>
                      <td>{course.capacity}</td>
                      <td>{course.capacity - enrolledStudents.length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRegistrations;
