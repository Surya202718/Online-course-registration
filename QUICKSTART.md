# Quick Start Guide

## 🚀 Run the Application in 3 Steps

### Step 1: Open Terminal in VS Code
- Open VS Code
- Open the project folder: `course-registration-system`
- Press `` Ctrl + ` `` (backtick) to open terminal

### Step 2: Install Dependencies
```bash
npm install
```
Wait for installation to complete (1-2 minutes)

### Step 3: Start the Application
```bash
npm start
```
The app will open automatically at `http://localhost:3000`

---

## 🔑 Login Credentials

### Student Account
```
Username: student
Password: student123
```

### Admin Account
```
Username: admin
Password: admin123
```

---

## 📱 Test the Application

### As a Student:
1. Login with student credentials
2. Click "Select Courses" in navigation
3. Click "Enroll" on any course
4. Try enrolling in a course with conflicting time → See warning popup
5. Go to "My Schedule" to see your timetable
6. Click "Drop Course" to remove a course

### As an Admin:
1. Logout and login with admin credentials
2. Click "Add Course" to create a new course
3. Go to "Manage Courses" to edit/delete courses
4. Visit "Assign Faculty" to update course details
5. Check "Registrations" to see student enrollments

---

## 🌐 Deploy to Vercel (Easiest)

### One-Command Deployment:
```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will be live in 2 minutes!

---

## 🌐 Deploy to Netlify

### Using Drag & Drop:
1. Run: `npm run build`
2. Go to: https://app.netlify.com/drop
3. Drag the `build` folder
4. Done! Your site is live!

---

## 🛠️ Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📂 Project Structure Overview

```
src/
├── components/
│   ├── Student/          # Student-side pages
│   ├── Admin/            # Admin-side pages
│   └── Common/           # Shared components
├── data/                 # Sample JSON data
├── styles/               # CSS files
└── App.js               # Main routing
```

---

## 💡 Key Features to Test

✅ **Conflict Detection** - Try enrolling in courses with same time
✅ **Weekly Timetable** - Visual grid showing all classes
✅ **Responsive Design** - Resize browser to see mobile view
✅ **Data Persistence** - Refresh page, data remains
✅ **Search & Filter** - Find courses by name or department
✅ **Drop Courses** - Remove courses from schedule

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npx kill-port 3000
npm start
```

**Module not found?**
```bash
npm install
```

**Build fails?**
```bash
npm run build
```

---

## 📞 Need Help?

- Check README.md for detailed documentation
- Review code comments in components
- Test with demo credentials provided

---

**Happy Coding! 🎉**
