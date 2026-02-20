import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/AdminForms.css';

const AssignFaculty = ({ courses, setCourses, onLogout }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [faculty, setFaculty] = useState('');
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('09:00-10:30');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');

  const handleCourseSelect = (e) => {
    const courseId = parseInt(e.target.value);
    setSelectedCourse(courseId);
    
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setFaculty(course.faculty);
      setDay(course.day);
      setTime(course.time);
      setRoom(course.room);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedCourse) {
      setMessage('Please select a course');
      return;
    }

    const updatedCourses = courses.map(course => {
      if (course.id === selectedCourse) {
        return {
          ...course,
          faculty,
          day,
          time,
          room
        };
      }
      return course;
    });

    setCourses(updatedCourses);
    setMessage('Faculty and timing assigned successfully!');
    
    setTimeout(() => setMessage(''), 3000);
  };

  const user = { role: 'admin', name: 'Admin' };

  return (
    <div className="admin-form-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="admin-form-content">
        <h1>Assign Faculty & Timing</h1>
        
        <form onSubmit={handleSubmit} className="course-form">
          <div className="form-group">
            <label>Select Course *</label>
            <select 
              value={selectedCourse} 
              onChange={handleCourseSelect}
              required
            >
              <option value="">-- Select a Course --</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.code} - {course.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCourse && (
            <>
              <div className="form-group">
                <label>Faculty Name *</label>
                <input
                  type="text"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  placeholder="e.g., Dr. John Smith"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Day *</label>
                  <select value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Time *</label>
                  <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="09:00-10:30">09:00-10:30</option>
                    <option value="10:00-11:30">10:00-11:30</option>
                    <option value="11:00-12:30">11:00-12:30</option>
                    <option value="14:00-15:30">14:00-15:30</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Room *</label>
                  <input
                    type="text"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="e.g., Room 101"
                    required
                  />
                </div>
              </div>

              {message && (
                <div className={message.includes('success') ? 'success-message' : 'error-message'}>
                  {message}
                </div>
              )}

              <button type="submit" className="submit-btn">Assign</button>
            </>
          )}
        </form>

        <div className="current-assignments">
          <h2>Current Assignments</h2>
          <div className="courses-table">
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Faculty</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Room</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>{course.faculty}</td>
                    <td>{course.day}</td>
                    <td>{course.time}</td>
                    <td>{course.room}</td>
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

export default AssignFaculty;
