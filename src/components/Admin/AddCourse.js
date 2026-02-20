import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import '../../styles/AdminForms.css';

const AddCourse = ({ courses, setCourses, onLogout }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credits: 3,
    faculty: '',
    department: '',
    capacity: 30,
    day: 'Monday',
    time: '09:00-10:30',
    room: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'credits' || name === 'capacity' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!formData.code || !formData.name || !formData.faculty || !formData.department || !formData.room) {
      setMessage('Please fill all required fields');
      return;
    }

    // Check if course code already exists
    if (courses.some(c => c.code === formData.code)) {
      setMessage('Course code already exists!');
      return;
    }

    // Create new course
    const newCourse = {
      id: courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1,
      ...formData,
      enrolled: 0
    };

    setCourses([...courses, newCourse]);
    setMessage('Course added successfully!');
    
    // Reset form
    setFormData({
      code: '',
      name: '',
      credits: 3,
      faculty: '',
      department: '',
      capacity: 30,
      day: 'Monday',
      time: '09:00-10:30',
      room: '',
      description: ''
    });

    setTimeout(() => setMessage(''), 3000);
  };

  const user = { role: 'admin', name: 'Admin' };

  return (
    <div className="admin-form-container">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="admin-form-content">
        <h1>Add New Course</h1>
        
        <form onSubmit={handleSubmit} className="course-form">
          <div className="form-row">
            <div className="form-group">
              <label>Course Code *</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="e.g., CS101"
                required
              />
            </div>

            <div className="form-group">
              <label>Course Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Introduction to Programming"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Credits *</label>
              <input
                type="number"
                name="credits"
                value={formData.credits}
                onChange={handleChange}
                min="1"
                max="6"
                required
              />
            </div>

            <div className="form-group">
              <label>Capacity *</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                min="10"
                max="100"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Faculty *</label>
              <input
                type="text"
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                placeholder="e.g., Dr. John Smith"
                required
              />
            </div>

            <div className="form-group">
              <label>Department *</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Day *</label>
              <select name="day" value={formData.day} onChange={handleChange}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </div>

            <div className="form-group">
              <label>Time *</label>
              <select name="time" value={formData.time} onChange={handleChange}>
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
                name="room"
                value={formData.room}
                onChange={handleChange}
                placeholder="e.g., Room 101"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Course description..."
              rows="3"
            />
          </div>

          {message && (
            <div className={message.includes('success') ? 'success-message' : 'error-message'}>
              {message}
            </div>
          )}

          <button type="submit" className="submit-btn">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
