import React from 'react';
import '../../styles/ConflictWarning.css';

const ConflictWarning = ({ message, course, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>⚠️ Warning</h2>
        </div>
        
        <div className="modal-body">
          <p className="conflict-message">{message}</p>
          
          {course && (
            <div className="course-info">
              <h3>{course.code} - {course.name}</h3>
              <p><strong>Schedule:</strong> {course.day}, {course.time}</p>
              <p><strong>Faculty:</strong> {course.faculty}</p>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button onClick={onClose} className="close-btn">OK</button>
        </div>
      </div>
    </div>
  );
};

export default ConflictWarning;
