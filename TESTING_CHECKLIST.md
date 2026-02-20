# Installation & Testing Checklist

## ✅ Pre-Installation Checklist

- [ ] Node.js installed (v14 or higher)
  - Check: `node --version`
- [ ] npm installed
  - Check: `npm --version`
- [ ] VS Code installed (recommended)
- [ ] Terminal access

---

## 📦 Installation Steps

### Step 1: Navigate to Project
```bash
cd "d:\Online course registration\course-registration-system"
```
- [ ] Successfully navigated to project folder

### Step 2: Install Dependencies
```bash
npm install
```
- [ ] Installation completed without errors
- [ ] `node_modules` folder created
- [ ] All dependencies installed

### Step 3: Start Development Server
```bash
npm start
```
- [ ] Server started successfully
- [ ] Browser opened automatically
- [ ] Application loads at http://localhost:3000
- [ ] No console errors

---

## 🧪 Functional Testing

### Login Page Testing
- [ ] Login page displays correctly
- [ ] Demo credentials are visible
- [ ] Can switch between Student and Admin roles
- [ ] Form validation works (empty fields)
- [ ] Invalid credentials show error message
- [ ] Valid student login redirects to student dashboard
- [ ] Valid admin login redirects to admin dashboard

### Student Portal Testing

#### Dashboard
- [ ] Student name displays in navbar
- [ ] Statistics cards show correct data
- [ ] Quick action buttons work
- [ ] Enrolled courses display (if any)
- [ ] Navigation links work

#### Course List
- [ ] All courses display in grid
- [ ] Search functionality works
- [ ] Department filter works
- [ ] Course details are complete
- [ ] Availability status shows correctly

#### Course Selection
- [ ] Available courses display
- [ ] Enrollment summary shows
- [ ] Can enroll in available course
- [ ] Success message appears
- [ ] Full courses show "Full" button (disabled)
- [ ] Already enrolled courses don't appear

#### Conflict Detection
- [ ] Enroll in first course (e.g., CS101 - Monday 09:00-10:30)
- [ ] Try enrolling in conflicting course (e.g., MATH201 - Monday 09:00-10:30)
- [ ] Warning popup appears
- [ ] Conflict message is clear
- [ ] Course details show in popup
- [ ] OK button closes popup
- [ ] Course is NOT enrolled

#### Weekly Schedule
- [ ] Timetable grid displays correctly
- [ ] Days (Mon-Fri) show in header
- [ ] Time slots display
- [ ] Enrolled courses appear in correct slots
- [ ] Empty slots show "-"
- [ ] Course details visible in slots
- [ ] Schedule summary shows correct data
- [ ] Enrolled courses list displays

#### Drop Course
- [ ] Drop button appears for each course
- [ ] Click drop button
- [ ] Confirmation modal appears
- [ ] Course details show in modal
- [ ] Cancel button works
- [ ] Yes button drops course
- [ ] Schedule updates immediately
- [ ] Course appears in available courses again

### Admin Portal Testing

#### Admin Dashboard
- [ ] Admin name displays
- [ ] Statistics show correct numbers
- [ ] Quick action buttons work
- [ ] Recent courses table displays
- [ ] All navigation links work

#### Add Course
- [ ] Form displays all fields
- [ ] Can enter course details
- [ ] Form validation works
- [ ] Duplicate code check works
- [ ] Success message appears
- [ ] Form resets after submission
- [ ] New course appears in course list

#### Manage Courses
- [ ] All courses display in table
- [ ] Edit button works
- [ ] Inline editing form appears
- [ ] Can modify all fields
- [ ] Save button updates course
- [ ] Cancel button discards changes
- [ ] Delete button shows confirmation
- [ ] Delete removes course
- [ ] Success messages appear

#### Assign Faculty
- [ ] Course dropdown populates
- [ ] Selecting course loads current data
- [ ] Can update faculty name
- [ ] Can change day and time
- [ ] Can update room
- [ ] Save updates course
- [ ] Success message appears
- [ ] Current assignments table shows all courses

#### View Registrations
- [ ] All registrations display
- [ ] Filter by course works
- [ ] Filter by student works
- [ ] Registration count is correct
- [ ] Enrollment summary table displays
- [ ] Available seats calculated correctly

---

## 📱 Responsive Testing

### Desktop (1920px)
- [ ] Full layout displays
- [ ] All grids show multiple columns
- [ ] Navigation is horizontal
- [ ] No horizontal scrolling

### Laptop (1366px)
- [ ] Layout adjusts properly
- [ ] Grids remain functional
- [ ] All content visible

### Tablet (768px)
- [ ] Layout switches to mobile view
- [ ] Grids stack vertically
- [ ] Navigation wraps
- [ ] Tables scroll horizontally

### Mobile (375px)
- [ ] Single column layout
- [ ] All buttons accessible
- [ ] Text is readable
- [ ] Forms are usable
- [ ] Timetable scrolls horizontally

---

## 🔄 Data Persistence Testing

- [ ] Enroll in courses as student
- [ ] Refresh page
- [ ] Courses still enrolled
- [ ] Add course as admin
- [ ] Refresh page
- [ ] New course still exists
- [ ] Logout and login again
- [ ] Data persists

---

## 🎨 UI/UX Testing

- [ ] Colors are consistent
- [ ] Buttons have hover effects
- [ ] Forms are well-aligned
- [ ] Text is readable
- [ ] Spacing is appropriate
- [ ] No layout breaks
- [ ] Animations are smooth
- [ ] Modals center properly

---

## 🚀 Build Testing

### Create Production Build
```bash
npm run build
```
- [ ] Build completes successfully
- [ ] `build` folder created
- [ ] No build errors
- [ ] No warnings (or acceptable warnings)

### Test Production Build Locally
```bash
npx serve -s build
```
- [ ] Build serves correctly
- [ ] Application works in production mode
- [ ] All features functional

---

## 🌐 Deployment Testing

### Vercel Deployment
```bash
vercel
```
- [ ] Deployment successful
- [ ] Live URL provided
- [ ] Site loads correctly
- [ ] All features work online

### Netlify Deployment
```bash
npm run build
# Upload to netlify.com/drop
```
- [ ] Build uploaded successfully
- [ ] Site published
- [ ] Live URL works
- [ ] All features functional

---

## 🐛 Error Testing

- [ ] Test with invalid login
- [ ] Test enrolling in full course
- [ ] Test time conflict
- [ ] Test duplicate course code
- [ ] Test empty form submission
- [ ] All errors handled gracefully
- [ ] Error messages are clear

---

## 📊 Performance Testing

- [ ] Page loads quickly (< 3 seconds)
- [ ] No lag when navigating
- [ ] Forms submit instantly
- [ ] Modals open smoothly
- [ ] No memory leaks
- [ ] Browser console is clean

---

## ✅ Final Verification

- [ ] All student features work
- [ ] All admin features work
- [ ] Responsive on all devices
- [ ] Data persists correctly
- [ ] No console errors
- [ ] No broken links
- [ ] All buttons functional
- [ ] All forms working
- [ ] Logout works
- [ ] Can re-login

---

## 📝 Documentation Check

- [ ] README.md is complete
- [ ] QUICKSTART.md is clear
- [ ] FEATURES.md is detailed
- [ ] PROJECT_SUMMARY.md is accurate
- [ ] Code has comments
- [ ] Demo credentials documented

---

## 🎉 Success Criteria

✅ All checkboxes above are checked
✅ No critical errors
✅ Application is fully functional
✅ Ready for deployment
✅ Ready for presentation

---

## 🆘 Troubleshooting

### If npm install fails:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### If port 3000 is busy:
```bash
npx kill-port 3000
npm start
```

### If build fails:
```bash
npm install --legacy-peer-deps
npm run build
```

### If deployment fails:
- Check Node version compatibility
- Verify build folder exists
- Check deployment logs
- Ensure all dependencies installed

---

## 📞 Support Resources

1. **README.md** - Complete documentation
2. **QUICKSTART.md** - Quick start guide
3. **FEATURES.md** - Feature details
4. **Code Comments** - Inline help
5. **Demo Credentials** - Test accounts

---

**Testing Complete! Ready to Use! 🚀**

---

## 📋 Quick Test Script

Run this quick test:
1. Login as student
2. Enroll in 2 courses
3. Try enrolling in conflicting course
4. View schedule
5. Drop one course
6. Logout
7. Login as admin
8. Add new course
9. View registrations
10. Logout

**If all 10 steps work → Application is perfect! ✅**

---

**Date Tested:** _______________

**Tested By:** _______________

**Result:** ☐ PASS  ☐ FAIL

**Notes:** _______________________________________________
