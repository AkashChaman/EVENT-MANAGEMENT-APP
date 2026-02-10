// src/config/firebase.js
// Firebase configuration and initialization

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Read and normalize environment variables
const env = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || ''
};

// Basic validation: require a minimal set of values for firebase to work
const hasRequiredConfig = Boolean(env.apiKey && env.authDomain && env.projectId && env.appId);

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId
};

let app = null;
let auth = null;

if (hasRequiredConfig) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Firebase initialization error:', err);
  }
} else {
  // eslint-disable-next-line no-console
  console.warn('Firebase is not fully configured. Set REACT_APP_FIREBASE_* environment variables in your environment or hosting provider.');
}

// Helper that consumers can call to get a guaranteed auth instance or a clear error
function getAuthInstance() {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized. Ensure REACT_APP_FIREBASE_* env variables are set and the app was initialized.');
  }
  return auth;
}

const isFirebaseConfigured = Boolean(app && auth);

export { auth, getAuthInstance, isFirebaseConfigured };
export default app;
