# EventHub - Modern Event Management Application

A production-ready event management web application built with React.js and Firebase Authentication. This application allows users to manage events, view countdowns, and access detailed event information.

![EventHub](https://img.shields.io/badge/React-18.2.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.7.1-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Firebase Setup](#firebase-setup)
- [Running the Application](#running-the-application)
- [Application Pages](#application-pages)
- [Security Features](#security-features)
- [Customization](#customization)
- [Deployment](#deployment)

## ✨ Features

### Authentication
- ✅ Secure Firebase Authentication
- ✅ Email & Password login/signup
- ✅ Form validation and error handling
- ✅ Protected routes for authenticated users
- ✅ Session management
- ✅ Logout functionality

### Event Management
- ✅ Event listing with cards
- ✅ Real-time countdown timers
- ✅ Detailed event information
- ✅ Event categorization
- ✅ Responsive event cards

### User Interface
- ✅ Modern, clean design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Gradient backgrounds
- ✅ Professional typography

## 🛠️ Tech Stack

**Frontend:**
- React.js 18.2.0
- React Router DOM 6.20.0
- CSS3 (Custom styling)

**Backend/Services:**
- Firebase Authentication 10.7.1
- Firebase SDK

**Build Tools:**
- React Scripts 5.0.1
- Create React App

## 📁 Project Structure

```
event-management-app/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── CountdownTimer.js   # Reusable countdown component
│   │   ├── Navbar.js           # Navigation bar
│   │   └── PrivateRoute.js     # Route protection component
│   ├── pages/
│   │   ├── LandingPage.js      # Home/Landing page
│   │   ├── AuthPage.js         # Login/Signup page
│   │   ├── EventsPage.js       # Events listing page
│   │   └── EventDetailsPage.js # Event details page
│   ├── config/
│   │   └── firebase.js         # Firebase configuration
│   ├── utils/
│   │   └── AuthContext.js      # Authentication context
│   ├── styles/
│   │   ├── App.css             # Global styles
│   │   ├── Navbar.css
│   │   ├── CountdownTimer.css
│   │   ├── LandingPage.css
│   │   ├── AuthPage.css
│   │   ├── EventsPage.css
│   │   └── EventDetailsPage.css
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
├── .env.example                # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A **Firebase account** (free tier works)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

### 1. Clone or Download the Project

```bash
# If using Git
git clone <your-repository-url>
cd event-management-app

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- react
- react-dom
- react-router-dom
- firebase
- react-scripts

## 🔥 Firebase Setup

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name (e.g., "event-management-app")
4. Disable Google Analytics (optional)
5. Click "Create Project"

### Step 2: Enable Authentication

1. In Firebase Console, go to **Build** → **Authentication**
2. Click "Get Started"
3. Click on **Sign-in method** tab
4. Enable **Email/Password** provider
5. Click "Save"

### Step 3: Get Firebase Configuration

1. In Firebase Console, click the **gear icon** → **Project Settings**
2. Scroll down to "Your apps"
3. Click the **Web icon** (`</>`)
4. Register your app (name: "EventHub Web")
5. Copy the Firebase configuration object

### Step 4: Configure Environment Variables

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

2. Open `.env` and replace the placeholder values with your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_actual_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

**Important:** Never commit the `.env` file to version control!

## ▶️ Running the Application

### Development Mode

```bash
npm start
```

- Opens http://localhost:3000 in your browser
- Hot-reload enabled (changes reflect immediately)
- Development server with detailed error messages

### Production Build

```bash
npm run build
```

- Creates optimized production build in `build/` folder
- Minifies and optimizes all files
- Ready for deployment

### Testing the Build Locally

```bash
# Install serve (one-time)
npm install -g serve

# Serve the production build
serve -s build
```

## 📄 Application Pages

### 1. Landing Page (`/`)
- **Public Access**: Yes
- **Features**:
  - Hero section with app introduction
  - Feature cards highlighting capabilities
  - Call-to-action buttons (Login/Sign Up)
  - Responsive design
  - Animated elements

### 2. Authentication Page (`/auth`)
- **Public Access**: Yes
- **Features**:
  - Toggle between Login and Sign Up
  - Email validation
  - Password strength requirements (min 6 characters)
  - Confirm password field for signup
  - Comprehensive error handling
  - Firebase Authentication integration
  - Auto-redirect if already logged in

### 3. Events Page (`/events`)
- **Public Access**: No (Protected Route)
- **Features**:
  - Grid layout of event cards
  - Live countdown timers for each event
  - Event date, time, and location
  - Click to view details
  - Responsive grid (adjusts to screen size)
  - Auto-logout functionality via navbar

### 4. Event Details Page (`/events/:id`)
- **Public Access**: No (Protected Route)
- **Features**:
  - Full event information
  - Large countdown timer
  - Event category badge
  - Detailed description
  - Location and address
  - Organizer information
  - Capacity details
  - Action buttons (Add to Calendar, Share)
  - Back navigation

## 🔐 Security Features

### Authentication Security
- Firebase Authentication (industry-standard)
- Secure password hashing (handled by Firebase)
- Session management with automatic timeout
- Protected routes with redirect

### Environment Variables
- Sensitive configuration in `.env` file
- `.gitignore` prevents accidental commits
- Environment-specific configurations

### Route Protection
- `PrivateRoute` component guards protected pages
- Automatic redirect to login for unauthenticated users
- Session persistence across page refreshes

## 🎨 Customization

### Changing Colors

Edit the gradient colors in CSS files:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Replace with your colors */
background: linear-gradient(135deg, #yourColor1 0%, #yourColor2 100%);
```

### Modifying Events Data

Currently, events are hardcoded. To connect to a real database:

1. **Option A: Firebase Firestore**
```javascript
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const db = getFirestore();
const eventsRef = collection(db, 'events');
const snapshot = await getDocs(eventsRef);
```

2. **Option B: REST API**
```javascript
const response = await fetch('https://your-api.com/events');
const events = await response.json();
```

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.js`:

```javascript
<Route path="/your-path" element={<YourComponent />} />
```

## 🚀 Deployment

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Select: Hosting
# Build directory: build
# Single-page app: Yes
# Overwrite index.html: No

# Build the app
npm run build

# Deploy
firebase deploy
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop `build/` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify all environment variables are correct
- Check Firebase Console for enabled Authentication methods
- Ensure API key has no extra spaces

### Countdown Timer Issues
- Verify event dates are in the future
- Check date format: `YYYY-MM-DDTHH:mm:ss`
- Ensure timezone is considered

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues, questions, or contributions, please open an issue in the repository.

---

**Built with ❤️ using React and Firebase**
