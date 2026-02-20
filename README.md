# Online Student Course Selection and Scheduling System

A complete front-end React web application for managing student course registration and scheduling with conflict detection and admin management features.

## Features

### Student Features
- ✅ Login with credentials
- ✅ View personal dashboard with enrolled courses
- ✅ Browse all available courses with search and filter
- ✅ Select courses with automatic conflict detection
- ✅ View weekly timetable in grid format
- ✅ Drop courses from schedule
- ✅ Real-time schedule conflict warnings

### Admin Features
- ✅ Admin dashboard with statistics
- ✅ Add new courses
- ✅ Edit and delete existing courses
- ✅ Assign faculty and timing to courses
- ✅ View all student registrations
- ✅ Course enrollment summary

## Technology Stack

- **React** (Functional Components with Hooks)
- **React Router** (Navigation)
- **CSS3** (Modern, Responsive Design)
- **LocalStorage** (Data Persistence)

## Project Structure

```
course-registration-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Student/
│   │   │   ├── StudentDashboard.js
│   │   │   ├── CourseList.js
│   │   │   ├── CourseSelection.js
│   │   │   ├── ConflictWarning.js
│   │   │   └── WeeklySchedule.js
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AddCourse.js
│   │   │   ├── ManageCourses.js
│   │   │   ├── AssignFaculty.js
│   │   │   └── ViewRegistrations.js
│   │   └── Common/
│   │       ├── Login.js
│   │       └── Navbar.js
│   ├── data/
│   │   └── coursesData.js
│   ├── styles/
│   │   ├── Login.css
│   │   ├── Navbar.css
│   │   ├── Dashboard.css
│   │   ├── CourseList.css
│   │   ├── CourseSelection.css
│   │   ├── ConflictWarning.css
│   │   ├── WeeklySchedule.css
│   │   └── AdminForms.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- VS Code (recommended)

### Steps to Run Locally

1. **Navigate to the project directory**
   ```bash
   cd course-registration-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - The application will automatically open at `http://localhost:3000`
   - If not, manually navigate to `http://localhost:3000`

## Demo Credentials

### Student Login
- **Username:** student
- **Password:** student123

### Admin Login
- **Username:** admin
- **Password:** admin123

## Usage Guide

### For Students

1. **Login** - Use student credentials to login
2. **Dashboard** - View enrolled courses and statistics
3. **Browse Courses** - Navigate to "Courses" to see all available courses
4. **Select Courses** - Go to "Select Courses" to enroll in new courses
   - System automatically checks for time conflicts
   - Shows warning popup if conflict detected
5. **View Schedule** - Check "My Schedule" to see weekly timetable
6. **Drop Courses** - Remove courses from your schedule

### For Admin

1. **Login** - Use admin credentials to login
2. **Dashboard** - View system statistics
3. **Add Course** - Create new courses with details
4. **Manage Courses** - Edit or delete existing courses
5. **Assign Faculty** - Assign faculty and timing to courses
6. **View Registrations** - See all student enrollments

## Deployment Instructions

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd course-registration-system
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No
   - Project name? (press enter for default)
   - Directory? ./ (press enter)
   - Override settings? No

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

#### Method 1: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **Follow the prompts:**
   - Create & configure a new site
   - Team: Select your team
   - Site name: (optional)
   - Publish directory: build

5. **Deploy to production**
   ```bash
   netlify deploy --prod
   ```

#### Method 2: Using Netlify Web Interface

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://www.netlify.com/)**
3. **Sign up or login**
4. **Click "Add new site" → "Deploy manually"**
5. **Drag and drop the `build` folder**
6. **Your site is live!**

#### Method 3: Connect Git Repository

1. **Push code to GitHub/GitLab/Bitbucket**
2. **Go to [Netlify](https://www.netlify.com/)**
3. **Click "Add new site" → "Import an existing project"**
4. **Connect your Git provider**
5. **Select your repository**
6. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
7. **Click "Deploy site"**

## Features Explained

### Conflict Detection
- Automatically checks for time conflicts when enrolling
- Prevents double-booking of time slots
- Shows detailed warning popup with conflict information

### Weekly Timetable
- Visual grid layout showing all classes
- Color-coded course slots
- Shows course code, name, room, and faculty
- Empty slots clearly marked

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Adaptive layouts for different screen sizes
- Touch-friendly interface

### Data Persistence
- Uses browser localStorage
- Data persists across sessions
- No backend required

## Customization

### Adding More Courses
Edit `src/data/coursesData.js` and add new course objects to the `coursesData` array.

### Changing Colors
Modify the gradient colors in CSS files:
- Primary gradient: `#667eea` to `#764ba2`
- Update in respective CSS files

### Adding Time Slots
Edit the `timeSlots` array in `WeeklySchedule.js` and update the select options in admin forms.

## Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
PORT=3001 npm start
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues
- Ensure `build` folder is created: `npm run build`
- Check Node version compatibility
- Verify all dependencies are installed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration with REST API
- Database for persistent storage
- Email notifications
- PDF schedule export
- Course prerequisites
- Waitlist functionality
- Payment integration

## License

This project is open source and available for educational purposes.

## Contact

For questions or support, please contact the development team.

---

**Developed with ❤️ using React**
