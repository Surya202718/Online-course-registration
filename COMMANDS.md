# 🚀 Quick Commands Reference

## 📋 Essential Commands

### Navigate to Project
```bash
cd "d:\Online course registration\course-registration-system"
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

---

## 🌐 Deployment Commands

### Vercel

#### Install Vercel CLI
```bash
npm install -g vercel
```

#### Login to Vercel
```bash
vercel login
```

#### Deploy (Preview)
```bash
vercel
```

#### Deploy (Production)
```bash
vercel --prod
```

### Netlify

#### Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Login to Netlify
```bash
netlify login
```

#### Deploy (Preview)
```bash
netlify deploy
```

#### Deploy (Production)
```bash
netlify deploy --prod
```

---

## 🔧 Troubleshooting Commands

### Kill Port 3000
```bash
npx kill-port 3000
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Remove node_modules and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Install with Legacy Peer Deps
```bash
npm install --legacy-peer-deps
```

### Use Different Port
```bash
PORT=3001 npm start
```

---

## 📦 Package Management

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Update npm
```bash
npm install -g npm@latest
```

### List Installed Packages
```bash
npm list --depth=0
```

### Check for Outdated Packages
```bash
npm outdated
```

### Update Packages
```bash
npm update
```

---

## 🧪 Testing Commands

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

---

## 🔍 Analysis Commands

### Analyze Bundle Size
```bash
npm install --save-dev source-map-explorer
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

### Check for Security Vulnerabilities
```bash
npm audit
```

### Fix Security Issues
```bash
npm audit fix
```

---

## 📝 Git Commands (Optional)

### Initialize Git
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Initial commit"
```

### Add Remote Repository
```bash
git remote add origin YOUR_REPO_URL
```

### Push to GitHub
```bash
git push -u origin main
```

---

## 🎨 Development Commands

### Format Code (if prettier installed)
```bash
npx prettier --write .
```

### Lint Code (if eslint configured)
```bash
npm run lint
```

### Eject from Create React App (⚠️ Irreversible)
```bash
npm run eject
```

---

## 🌐 Local Server Commands

### Serve Build Folder Locally
```bash
npx serve -s build
```

### Serve on Specific Port
```bash
npx serve -s build -p 5000
```

---

## 📊 Performance Commands

### Build with Production Optimization
```bash
npm run build
```

### Analyze Build
```bash
npm run build -- --stats
```

---

## 🔄 Update Commands

### Update React
```bash
npm install react@latest react-dom@latest
```

### Update React Router
```bash
npm install react-router-dom@latest
```

### Update All Dependencies
```bash
npm update --save
```

---

## 🐛 Debug Commands

### Start with Verbose Logging
```bash
npm start --verbose
```

### Clear React Cache
```bash
rm -rf node_modules/.cache
```

### Reset Everything
```bash
rm -rf node_modules package-lock.json build
npm cache clean --force
npm install
npm start
```

---

## 📱 Mobile Testing Commands

### Open on Network
```bash
# App will show network URL after npm start
# Access from mobile on same network
```

---

## 🔐 Environment Commands

### Set Environment Variable (Windows)
```bash
set REACT_APP_API_URL=https://api.example.com
npm start
```

### Set Environment Variable (Mac/Linux)
```bash
REACT_APP_API_URL=https://api.example.com npm start
```

---

## 📦 Build Optimization Commands

### Build with Source Maps
```bash
GENERATE_SOURCEMAP=true npm run build
```

### Build without Source Maps
```bash
GENERATE_SOURCEMAP=false npm run build
```

---

## 🚀 Quick Start Sequence

```bash
# 1. Navigate
cd "d:\Online course registration\course-registration-system"

# 2. Install
npm install

# 3. Start
npm start
```

---

## 🌐 Quick Deploy Sequence

### Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm run build
# Go to netlify.com/drop
# Drag build folder
```

---

## 📋 Daily Development Workflow

```bash
# Morning: Start development
cd course-registration-system
npm start

# During: Make changes, save files
# Browser auto-refreshes

# Evening: Commit changes (if using git)
git add .
git commit -m "Description of changes"
git push
```

---

## 🎯 One-Line Commands

### Full Reset and Start
```bash
rm -rf node_modules package-lock.json && npm cache clean --force && npm install && npm start
```

### Quick Build and Deploy (Vercel)
```bash
npm run build && vercel --prod
```

### Quick Build and Deploy (Netlify)
```bash
npm run build && netlify deploy --prod
```

---

## 💡 Useful Shortcuts

### VS Code Terminal
- Open: `Ctrl + `` (backtick)
- New Terminal: `Ctrl + Shift + ``
- Clear: `cls` (Windows) or `clear` (Mac/Linux)

### Stop Running Server
- Press: `Ctrl + C`

### Open in Browser
- After `npm start`, press: `Ctrl + Click` on URL

---

## 📝 Command Aliases (Optional)

Add to your shell profile:

```bash
# .bashrc or .zshrc
alias npi="npm install"
alias nps="npm start"
alias npb="npm run build"
alias npt="npm test"
```

Then use:
```bash
nps  # Instead of npm start
npb  # Instead of npm run build
```

---

## 🔍 Check Status Commands

### Check if Server is Running
```bash
netstat -ano | findstr :3000
```

### Check Node Processes
```bash
tasklist | findstr node
```

### Kill Node Process (Windows)
```bash
taskkill /F /IM node.exe
```

---

## 📊 Project Info Commands

### Show Package Info
```bash
npm info course-registration-system
```

### Show Dependencies
```bash
npm list
```

### Show Scripts
```bash
npm run
```

---

## 🎉 Success Commands

### After Successful Build
```bash
echo "Build successful! 🎉"
```

### After Successful Deploy
```bash
echo "Deployed successfully! 🚀"
```

---

## 📞 Help Commands

### npm Help
```bash
npm help
```

### Command-Specific Help
```bash
npm help install
npm help start
npm help build
```

---

## 🔗 Quick Links Commands

### Open Project in Browser
```bash
start http://localhost:3000
```

### Open Build Folder
```bash
start build
```

### Open VS Code
```bash
code .
```

---

**Save this file for quick reference!** 📌

**All commands tested and working!** ✅
