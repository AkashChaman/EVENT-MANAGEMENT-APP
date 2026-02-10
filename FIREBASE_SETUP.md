# Firebase Setup Guide

This guide will walk you through setting up Firebase Authentication for the Event Management Application.

## Table of Contents

1. [Create Firebase Account](#1-create-firebase-account)
2. [Create Firebase Project](#2-create-firebase-project)
3. [Enable Authentication](#3-enable-authentication)
4. [Get Configuration Keys](#4-get-configuration-keys)
5. [Configure Application](#5-configure-application)
6. [Test Authentication](#6-test-authentication)
7. [Security Rules (Optional)](#7-security-rules-optional)

---

## 1. Create Firebase Account

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Sign in with your Google account
3. If you don't have a Google account, create one first

---

## 2. Create Firebase Project

### Step-by-Step Instructions:

1. **Click "Add Project"** (or "Create a Project")

2. **Enter Project Name**
   - Name: `event-management-app` (or your preferred name)
   - Click "Continue"

3. **Google Analytics** (Optional)
   - Toggle OFF if not needed (recommended for development)
   - Click "Continue"

4. **Create Project**
   - Wait for project creation (30-60 seconds)
   - Click "Continue" when ready

---

## 3. Enable Authentication

### Enable Email/Password Authentication:

1. **Navigate to Authentication**
   - In the left sidebar, click **"Build"** → **"Authentication"**
   - Click **"Get Started"**

2. **Enable Sign-in Method**
   - Click on the **"Sign-in method"** tab
   - Find **"Email/Password"** in the list
   - Click on it to expand

3. **Enable the Provider**
   - Toggle **"Enable"** to ON
   - Toggle **"Email link (passwordless sign-in)"** to OFF (we're using password)
   - Click **"Save"**

✅ Email/Password authentication is now enabled!

---

## 4. Get Configuration Keys

### Retrieve Firebase Configuration:

1. **Go to Project Settings**
   - Click the **gear icon** (⚙️) next to "Project Overview"
   - Select **"Project settings"**

2. **Add a Web App**
   - Scroll down to **"Your apps"** section
   - Click the **Web icon** (`</>`)
   - Enter app nickname: `EventHub Web`
   - **DO NOT** check "Also set up Firebase Hosting"
   - Click **"Register app"**

3. **Copy Configuration**
   - You'll see a code snippet with `firebaseConfig`
   - Copy the entire configuration object

Example configuration (yours will have different values):
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefghijklmnopqrs",
  authDomain: "event-management-app-12345.firebaseapp.com",
  projectId: "event-management-app-12345",
  storageBucket: "event-management-app-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

4. **Important Values to Copy:**
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

---

## 5. Configure Application

### Update Environment Variables:

1. **Locate `.env.example`** in the project root

2. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file** with your Firebase values:

   ```env
   REACT_APP_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrs
   REACT_APP_FIREBASE_AUTH_DOMAIN=event-management-app-12345.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=event-management-app-12345
   REACT_APP_FIREBASE_STORAGE_BUCKET=event-management-app-12345.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
   REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef
   ```

4. **Save the file**

### ⚠️ Security Warning:
- **NEVER** commit `.env` to version control
- The `.gitignore` file already excludes it
- Keep your API keys private

---

## 6. Test Authentication

### Verify Setup is Working:

1. **Start the application**
   ```bash
   npm start
   ```

2. **Navigate to Authentication Page**
   - Click "Get Started" or "Sign In" on the landing page
   - You should see the login/signup form

3. **Create Test Account**
   - Click "Sign Up" tab
   - Enter email: `test@example.com`
   - Enter password: `test123` (at least 6 characters)
   - Confirm password: `test123`
   - Click "Sign Up"

4. **Verify Success**
   - You should be redirected to `/events` page
   - You should see the navigation bar with your email
   - You should see the events list

5. **Test Logout**
   - Click "Logout" in the navigation bar
   - You should be redirected to the landing page

6. **Test Login**
   - Navigate back to `/auth`
   - Use the same credentials to log in
   - You should be redirected to `/events` again

### Check Firebase Console:

1. Go back to Firebase Console
2. Navigate to **Authentication** → **Users**
3. You should see your test user listed

✅ If you can see your user, authentication is working correctly!

---

## 7. Security Rules (Optional)

### Recommended Security Settings:

While this app uses only Authentication (not Firestore/Storage), here are some best practices:

1. **API Key Restrictions** (Production):
   - Go to Google Cloud Console
   - Navigate to "Credentials"
   - Restrict your API key to specific domains

2. **Authorized Domains**:
   - In Firebase Console → Authentication → Settings
   - Add your production domain to authorized domains
   - Remove unauthorized domains

3. **Password Policy** (Optional):
   - In Firebase Console → Authentication → Settings
   - Configure password policy requirements
   - Enable email enumeration protection

---

## Common Issues and Solutions

### Issue: "Permission Denied" Error

**Solution:**
- Verify Email/Password is enabled in Firebase Console
- Check that all environment variables are correct
- Restart the development server after changing `.env`

### Issue: "Invalid API Key"

**Solution:**
- Double-check `REACT_APP_FIREBASE_API_KEY` in `.env`
- Ensure no extra spaces before or after the key
- Verify the key in Firebase Console → Project Settings

### Issue: "Auth Domain Not Authorized"

**Solution:**
- Go to Firebase Console → Authentication → Settings → Authorized Domains
- Add `localhost` for development
- Add your production domain when deploying

### Issue: Environment Variables Not Loading

**Solution:**
- Ensure file is named exactly `.env` (not `.env.txt`)
- Restart the development server: `npm start`
- Check that all variables start with `REACT_APP_`

---

## Firebase Console Quick Links

- **Authentication Users**: Console → Build → Authentication → Users
- **Sign-in Methods**: Console → Build → Authentication → Sign-in method
- **Project Settings**: Console → Gear Icon → Project settings
- **Usage & Billing**: Console → Gear Icon → Usage and billing

---

## Next Steps

After completing this setup:

1. ✅ Firebase is configured
2. ✅ Authentication is working
3. ✅ Users can sign up and log in
4. 🚀 Your app is ready to use!

---

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)

---

**Need Help?**

If you encounter any issues not covered here:
1. Check the main README.md for troubleshooting
2. Review Firebase documentation
3. Check browser console for error messages
