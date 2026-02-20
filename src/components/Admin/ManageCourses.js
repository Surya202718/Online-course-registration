import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/AdminForms.css';

const ManageCourses = ({ courses, setCourses, onLogout }) => {
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  const handleEdit = (course) => {
    setEditingCourse(course.id);
    setFormData(course);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'credits' || name === 'capacity' || name === 'enrolled' ? parseInt(value) : value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const updatedCourses = courses.map(c => 
      c.id === editingCourse ? formData : c
    );
    
    setCourses(updatedCourses);
    setMessage('Course updated successfully!');
    setEditingCourse(null);
    setFormData({});
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const updatedCourses = courses.filter(c => c.id !== courseId);
      setCourses(updatedCourses);
      setMessage('Course deleted successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleCancel = () => {
    setEditingCourse(null);
    setFormData({});
  };

  const user = { role: 'admin', name: 'Admin' };

  return (
    <div className="admin-form-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="admin-form-content">
        <h1>Manage Courses</h1>
        
        {message && (
          <div className={message.includes('success') ? 'success-message' : 'error-message'}>
            {message}
          </div>
        )}

        <div className="courses-table">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>Schedule</th>
                <th>Enrolled/Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <React.Fragment key={course.id}>
                  {editingCourse === course.id ? (
                    <tr className="edit-row">
                      <td colSpan="7">
                        <form onSubmit={handleUpdate} className="inline-edit-form">
                          <div className="edit-grid">
                            <input
                              type="text"
                              name="code"
                              value={formData.code}
                              onChange={handleChange}
                              placeholder="Code"
                            />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              name="faculty"
                              value={formData.faculty}
                              onChange={handleChange}
                              placeholder="Faculty"
                            />
                            <input
                              type="text"
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              placeholder="Department"
                            />
                            <select name="day" value={formData.day} onChange={handleChange}>
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                            </select>
                            <select name="time" value={formData.time} onChange={handleChange}>
                              <option value="09:00-10:30">09:00-10:30</option>
                              <option value="10:00-11:30">10:00-11:30</option>
                              <option value="11:00-12:30">11:00-12:30</option>
                              <option value="14:00-15:30">14:00-15:30</option>
                            </select>
                            <input
                              type="text"
                              name="room"
                              value={formData.room}
                              onChange={handleChange}
                              placeholder="Room"
                            />
                            <input
                              type="number"
                              name="capacity"
                              value={formData.capacity}
                              onChange={handleChange}
                              placeholder="Capacity"
                            />
                          </div>
                          <div className="edit-actions">
                            <button type="submit" className="save-btn">Save</button>
                            <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
                          </div>
                        </form>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>{course.faculty}</td>
                      <td>{course.department}</td>
                      <td>{course.day}, {course.time}</td>
                      <td>{course.enrolled}/{course.capacity}</td>
                      <td>
                        <button onClick={() => handleEdit(course)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(course.id)} className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
