# Quick Start Guide - Event Management Application

Get your Event Management Application up and running in 5 minutes!

## ⚡ Quick Setup Steps

### 1. Install Dependencies (2 minutes)

```bash
cd event-management-app
npm install
```

Wait for all packages to install...

### 2. Firebase Setup (2 minutes)

#### A. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name it "event-management-app"
4. Disable Google Analytics
5. Click "Create Project"

#### B. Enable Authentication
1. Go to **Build** → **Authentication**
2. Click "Get Started"
3. Click **Sign-in method** tab
4. Enable **Email/Password**
5. Click "Save"

#### C. Get Configuration
1. Click ⚙️ → **Project Settings**
2. Scroll to "Your apps"
3. Click Web icon `</>`
4. Register app as "EventHub Web"
5. Copy the `firebaseConfig` values

### 3. Configure Environment (1 minute)

Create `.env` file in project root:

```bash
cp .env.example .env
```

Edit `.env` with your Firebase values:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Run the Application

```bash
npm start
```

Browser will open at http://localhost:3000

## ✅ Test the Application

1. **Landing Page**: You should see the EventHub landing page
2. **Click "Get Started"**: Navigate to auth page
3. **Sign Up**: Create an account with any email/password
4. **Events Page**: You should see a list of events with countdowns
5. **Click an Event**: View detailed event information
6. **Logout**: Click logout button in navbar

## 🎯 What You Get

✨ **4 Pages:**
- Landing Page (Home)
- Authentication Page (Login/Signup)
- Events Page (List of events)
- Event Details Page (Full event info)

🔐 **Security:**
- Firebase Authentication
- Protected routes
- Session management
- Secure logout

⏰ **Features:**
- Live countdown timers
- Responsive design
- Clean, modern UI
- Real-time updates

## 📱 Responsive Design

The application works perfectly on:
- 💻 Desktop (1920px+)
- 💼 Laptop (1366px+)
- 📱 Tablet (768px+)
- 📲 Mobile (375px+)

## 🚀 Next Steps

### Customize the Application

1. **Change Colors**: Edit gradient values in CSS files
2. **Add Events**: Modify events array in `EventsPage.js`
3. **Update Branding**: Change "EventHub" to your app name

### Connect to Real Database

The app currently uses hardcoded events. To use real data:

**Option 1: Firebase Firestore**
```bash
npm install firebase/firestore
```

**Option 2: Custom API**
```javascript
const events = await fetch('your-api-url').then(r => r.json());
```

### Deploy to Production

**Firebase Hosting:**
```bash
npm install -g firebase-tools
npm run build
firebase init
firebase deploy
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

## 🔧 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Firebase connection fails
- Check `.env` values are correct
- Restart development server
- Verify Firebase Authentication is enabled

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or run on different port
PORT=3001 npm start
```

## 📚 Documentation

For detailed information:
- **README.md** - Complete project documentation
- **FIREBASE_SETUP.md** - Detailed Firebase setup guide
- **HOW_IT_WORKS.md** - Application architecture explained

## 🎉 You're All Set!

Your Event Management Application is now running. Enjoy building awesome features!

---

**Need Help?**
- Check the main README.md
- Review browser console for errors
- Verify Firebase Console settings
