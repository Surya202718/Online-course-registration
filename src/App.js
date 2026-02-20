import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import StartPage from './components/Common/StartPage';
import Signup from './components/Common/Signup';
import Login from './components/Common/Login';
import StudentDashboard from './components/Student/StudentDashboard';
import CourseList from './components/Student/CourseList';
import CourseSelection from './components/Student/CourseSelection';
import WeeklySchedule from './components/Student/WeeklySchedule';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddCourse from './components/Admin/AddCourse';
import ManageCourses from './components/Admin/ManageCourses';
import AssignFaculty from './components/Admin/AssignFaculty';
import ViewRegistrations from './components/Admin/ViewRegistrations';

// Import data
import { coursesData, studentsData } from './data/coursesData';

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  // Initialize data from localStorage or use default data
  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    const storedStudents = localStorage.getItem('students');
    
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses(coursesData);
      localStorage.setItem('courses', JSON.stringify(coursesData));
    }

    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    } else {
      setStudents(studentsData);
      localStorage.setItem('students', JSON.stringify(studentsData));
    }

    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update localStorage when courses or students change
  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }, [courses]);

  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  const handleSignup = (userData) => {
    if (userData.role === 'admin') {
      // Check admin username exists
      const storedAdmins = JSON.parse(localStorage.getItem('admins') || '[]');
      const existingAdmin = storedAdmins.find(a => a.username === userData.username);
      if (existingAdmin) {
        return false;
      }

      // Create new admin
      const newAdmin = {
        id: storedAdmins.length > 0 ? Math.max(...storedAdmins.map(a => a.id)) + 1 : 1,
        username: userData.username,
        password: userData.password,
        name: userData.name,
        email: userData.email
      };

      const updatedAdmins = [...storedAdmins, newAdmin];
      localStorage.setItem('admins', JSON.stringify(updatedAdmins));
      return true;
    }

    // Check if username already exists for students
    const existingUser = students.find(s => s.username === userData.username);
    if (existingUser) {
      return false;
    }

    // Create new student
    const newUser = {
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
      username: userData.username,
      password: userData.password,
      name: userData.name,
      email: userData.email,
      enrolledCourses: []
    };

    const updatedStudents = [...students, newUser];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    
    return true;
  };

  const handleLogin = (username, password, role) => {
    if (role === 'student') {
      const student = students.find(s => s.username === username && s.password === password);
      if (student) {
        const userData = { ...student, role: 'student' };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
    } else if (role === 'admin') {
      const storedAdmins = JSON.parse(localStorage.getItem('admins') || '[]');
      const admin = storedAdmins.find(a => a.username === username && a.password === password);
      if (admin) {
        const userData = { ...admin, role: 'admin' };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
    }

    return false;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map(s => 
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedStudents);
    
    // Update user if it's the current student
    if (user && user.id === updatedStudent.id) {
      const userData = { ...updatedStudent, role: 'student' };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          {/* Student Routes */}
          <Route 
            path="/student/dashboard" 
            element={user && user.role === 'student' ? 
              <StudentDashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/student/courses" 
            element={user && user.role === 'student' ? 
              <CourseList user={user} courses={courses} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/student/select-courses" 
            element={user && user.role === 'student' ? 
              <CourseSelection 
                user={user} 
                courses={courses} 
                onUpdateStudent={updateStudent}
                onLogout={handleLogout}
              /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/student/schedule" 
            element={user && user.role === 'student' ? 
              <WeeklySchedule 
                user={user} 
                courses={courses}
                onUpdateStudent={updateStudent}
                onLogout={handleLogout}
              /> : 
              <Navigate to="/login" />
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={user && user.role === 'admin' ? 
              <AdminDashboard user={user} courses={courses} students={students} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/admin/add-course" 
            element={user && user.role === 'admin' ? 
              <AddCourse courses={courses} setCourses={setCourses} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/admin/manage-courses" 
            element={user && user.role === 'admin' ? 
              <ManageCourses courses={courses} setCourses={setCourses} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/admin/assign-faculty" 
            element={user && user.role === 'admin' ? 
              <AssignFaculty courses={courses} setCourses={setCourses} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/admin/registrations" 
            element={user && user.role === 'admin' ? 
              <ViewRegistrations courses={courses} students={students} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
