import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import ConflictWarning from './ConflictWarning';
import '../../styles/CourseSelection.css';

const CourseSelection = ({ user, courses, onUpdateStudent, onLogout }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showConflict, setShowConflict] = useState(false);
  const [conflictMessage, setConflictMessage] = useState('');

  const enrolledCourses = user.enrolledCourses || [];

  // Check for time conflicts
  const checkTimeConflict = (newCourse) => {
    for (let course of enrolledCourses) {
      if (course.day === newCourse.day && course.time === newCourse.time) {
        return `Time conflict with ${course.code} - ${course.name} on ${course.day} at ${course.time}`;
      }
    }
    return null;
  };

  // Check if already enrolled
  const isAlreadyEnrolled = (courseId) => {
    return enrolledCourses.some(c => c.id === courseId);
  };

  const handleEnroll = (course) => {
    // Check if already enrolled
    if (isAlreadyEnrolled(course.id)) {
      setConflictMessage('You are already enrolled in this course!');
      setSelectedCourse(course);
      setShowConflict(true);
      return;
    }

    // Check if course is full
    if (course.enrolled >= course.capacity) {
      setConflictMessage('This course is full!');
      setSelectedCourse(course);
      setShowConflict(true);
      return;
    }

    // Check for time conflicts
    const conflict = checkTimeConflict(course);
    if (conflict) {
      setConflictMessage(conflict);
      setSelectedCourse(course);
      setShowConflict(true);
      return;
    }

    // Enroll in course
    const updatedStudent = {
      ...user,
      enrolledCourses: [...enrolledCourses, course]
    };
    onUpdateStudent(updatedStudent);
    alert(`Successfully enrolled in ${course.code} - ${course.name}`);
  };

  const handleConflictConfirm = () => {
    setShowConflict(false);
    setSelectedCourse(null);
  };

  // Get available courses (not enrolled)
  const availableCourses = courses.filter(course => !isAlreadyEnrolled(course.id));

  return (
    <div className="course-selection-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="course-selection-content">
        <h1>Select Courses</h1>
        
        <div className="enrolled-summary">
          <p>Currently Enrolled: <strong>{enrolledCourses.length} courses</strong></p>
          <p>Total Credits: <strong>{enrolledCourses.reduce((sum, c) => sum + c.credits, 0)}</strong></p>
        </div>

        <h2>Available Courses</h2>
        <div className="selection-grid">
          {availableCourses.map(course => (
            <div key={course.id} className="selection-card">
              <div className="selection-header">
                <h3>{course.code}</h3>
                <span className="credits">{course.credits} Credits</span>
              </div>
              <h4>{course.name}</h4>
              <div className="selection-info">
                <p><strong>Faculty:</strong> {course.faculty}</p>
                <p><strong>Schedule:</strong> {course.day}, {course.time}</p>
                <p><strong>Room:</strong> {course.room}</p>
                <p><strong>Available:</strong> {course.capacity - course.enrolled} seats</p>
              </div>
              <button 
                onClick={() => handleEnroll(course)}
                className="enroll-btn"
                disabled={course.enrolled >= course.capacity}
              >
                {course.enrolled >= course.capacity ? 'Full' : 'Enroll'}
              </button>
            </div>
          ))}
        </div>

        {availableCourses.length === 0 && (
          <p className="no-courses">You are enrolled in all available courses!</p>
        )}
      </div>

      {showConflict && (
        <ConflictWarning 
          message={conflictMessage}
          course={selectedCourse}
          onClose={handleConflictConfirm}
        />
      )}
    </div>
  );
};

export default CourseSelection;
