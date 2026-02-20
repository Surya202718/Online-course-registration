// Sample course data with timing and faculty information
export const coursesData = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    credits: 3,
    faculty: "Dr. John Smith",
    department: "Computer Science",
    capacity: 40,
    enrolled: 28,
    day: "Monday",
    time: "09:00-10:30",
    room: "Room 101",
    description: "Basic programming concepts using Python"
  },
  {
    id: 2,
    code: "CS102",
    name: "Data Structures",
    credits: 4,
    faculty: "Dr. Sarah Johnson",
    department: "Computer Science",
    capacity: 35,
    enrolled: 30,
    day: "Tuesday",
    time: "10:00-11:30",
    room: "Room 102",
    description: "Advanced data structures and algorithms"
  },
  {
    id: 3,
    code: "MATH201",
    name: "Calculus I",
    credits: 3,
    faculty: "Prof. Michael Brown",
    department: "Mathematics",
    capacity: 50,
    enrolled: 45,
    day: "Monday",
    time: "11:00-12:30",
    room: "Room 201",
    description: "Differential and integral calculus"
  },
  {
    id: 4,
    code: "ENG101",
    name: "English Composition",
    credits: 3,
    faculty: "Dr. Emily Davis",
    department: "English",
    capacity: 30,
    enrolled: 25,
    day: "Wednesday",
    time: "09:00-10:30",
    room: "Room 301",
    description: "Academic writing and composition"
  },
  {
    id: 5,
    code: "PHY101",
    name: "Physics I",
    credits: 4,
    faculty: "Dr. Robert Wilson",
    department: "Physics",
    capacity: 40,
    enrolled: 32,
    day: "Thursday",
    time: "14:00-15:30",
    room: "Lab 101",
    description: "Mechanics and thermodynamics"
  },
  {
    id: 6,
    code: "CS201",
    name: "Database Systems",
    credits: 3,
    faculty: "Dr. Lisa Anderson",
    department: "Computer Science",
    capacity: 35,
    enrolled: 28,
    day: "Tuesday",
    time: "14:00-15:30",
    room: "Room 103",
    description: "Database design and SQL"
  },
  {
    id: 7,
    code: "MATH202",
    name: "Linear Algebra",
    credits: 3,
    faculty: "Prof. David Lee",
    department: "Mathematics",
    capacity: 40,
    enrolled: 35,
    day: "Friday",
    time: "10:00-11:30",
    room: "Room 202",
    description: "Vectors, matrices, and linear transformations"
  },
  {
    id: 8,
    code: "CS301",
    name: "Web Development",
    credits: 3,
    faculty: "Dr. Jennifer Taylor",
    department: "Computer Science",
    capacity: 30,
    enrolled: 22,
    day: "Monday",
    time: "14:00-15:30",
    room: "Lab 201",
    description: "HTML, CSS, JavaScript, and React"
  }
];

// Sample student data
export const studentsData = [
  {
    id: 1,
    username: "student",
    password: "student123",
    name: "Alex Johnson",
    email: "alex@university.edu",
    enrolledCourses: []
  }
];

// Sample admin data
export const adminData = {
  username: "admin",
  password: "admin123",
  name: "Admin User"
};
