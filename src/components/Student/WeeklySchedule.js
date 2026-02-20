import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/WeeklySchedule.css';

const WeeklySchedule = ({ user, courses, onUpdateStudent, onLogout }) => {
  const [showDropConfirm, setShowDropConfirm] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const enrolledCourses = user.enrolledCourses || [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00-10:30', '10:00-11:30', '11:00-12:30', '14:00-15:30'];

  // Get course for specific day and time
  const getCourseForSlot = (day, time) => {
    return enrolledCourses.find(course => course.day === day && course.time === time);
  };

  const handleDropCourse = (course) => {
    setCourseToDelete(course);
    setShowDropConfirm(true);
  };

  const confirmDrop = () => {
    const updatedCourses = enrolledCourses.filter(c => c.id !== courseToDelete.id);
    const updatedStudent = {
      ...user,
      enrolledCourses: updatedCourses
    };
    onUpdateStudent(updatedStudent);
    setShowDropConfirm(false);
    setCourseToDelete(null);
  };

  const cancelDrop = () => {
    setShowDropConfirm(false);
    setCourseToDelete(null);
  };

  return (
    <div className="schedule-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="schedule-content">
        <h1>My Weekly Schedule</h1>
        
        <div className="schedule-summary">
          <p>Total Courses: <strong>{enrolledCourses.length}</strong></p>
          <p>Total Credits: <strong>{enrolledCourses.reduce((sum, c) => sum + c.credits, 0)}</strong></p>
        </div>

        {/* Timetable Grid */}
        <div className="timetable">
          <div className="timetable-grid">
            <div className="time-header">Time</div>
            {days.map(day => (
              <div key={day} className="day-header">{day}</div>
            ))}

            {timeSlots.map(time => (
              <React.Fragment key={time}>
                <div className="time-slot">{time}</div>
                {days.map(day => {
                  const course = getCourseForSlot(day, time);
                  return (
                    <div key={`${day}-${time}`} className="schedule-cell">
                      {course ? (
                        <div className="course-slot">
                          <strong>{course.code}</strong>
                          <p>{course.name}</p>
                          <small>{course.room}</small>
                          <small>{course.faculty}</small>
                        </div>
                      ) : (
                        <div className="empty-slot">-</div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Enrolled Courses List with Drop Option */}
        <div className="enrolled-list">
          <h2>Enrolled Courses</h2>
          {enrolledCourses.length === 0 ? (
            <p className="no-courses">No courses enrolled yet.</p>
          ) : (
            <div className="course-list">
              {enrolledCourses.map(course => (
                <div key={course.id} className="enrolled-item">
                  <div className="enrolled-info">
                    <h3>{course.code} - {course.name}</h3>
                    <p><strong>Faculty:</strong> {course.faculty}</p>
                    <p><strong>Schedule:</strong> {course.day}, {course.time}</p>
                    <p><strong>Room:</strong> {course.room}</p>
                    <p><strong>Credits:</strong> {course.credits}</p>
                  </div>
                  <button 
                    onClick={() => handleDropCourse(course)}
                    className="drop-btn"
                  >
                    Drop Course
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Drop Confirmation Modal */}
      {showDropConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Drop Course</h2>
            <p>Are you sure you want to drop this course?</p>
            {courseToDelete && (
              <div className="course-details">
                <h3>{courseToDelete.code} - {courseToDelete.name}</h3>
                <p>{courseToDelete.faculty}</p>
              </div>
            )}
            <div className="modal-actions">
              <button onClick={confirmDrop} className="confirm-btn">Yes, Drop</button>
              <button onClick={cancelDrop} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklySchedule;
