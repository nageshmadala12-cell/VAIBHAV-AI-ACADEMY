import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App instance safely (avoid duplicate initialization)
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

// Google Auth Provider with Google Sheets & Drive scopes
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets');
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets.readonly');
googleProvider.addScope('https://www.googleapis.com/auth/drive.file');

// In-memory access token cache as specified in skill guidelines
let cachedAccessToken: string | null = null;
let isSigningIn = false;

// Saved token cache key for persistent sessions in demo/preview
const LOCAL_TOKEN_KEY = 'vaibhav_google_sheets_access_token';

// Try to load cached token from session
try {
  const savedToken = sessionStorage.getItem(LOCAL_TOKEN_KEY);
  if (savedToken) {
    cachedAccessToken = savedToken;
  }
} catch {
  // Ignore storage errors
}

/**
 * Initialize auth state listener
 */
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      try {
        sessionStorage.removeItem(LOCAL_TOKEN_KEY);
      } catch {
        // Ignore
      }
      if (onAuthFailure) onAuthFailure();
    }
  });
};

/**
 * Sign in with Google using popup to acquire Google Sheets OAuth token
 */
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    if (!credential?.accessToken) {
      throw new Error('Could not obtain Google OAuth access token. Please verify permissions.');
    }

    cachedAccessToken = credential.accessToken;
    try {
      sessionStorage.setItem(LOCAL_TOKEN_KEY, cachedAccessToken);
    } catch {
      // Ignore
    }

    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

/**
 * Get current OAuth access token
 */
export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

/**
 * Set manual access token if restored
 */
export const setCachedAccessToken = (token: string | null) => {
  cachedAccessToken = token;
  if (token) {
    try {
      sessionStorage.setItem(LOCAL_TOKEN_KEY, token);
    } catch {
      // Ignore
    }
  } else {
    try {
      sessionStorage.removeItem(LOCAL_TOKEN_KEY);
    } catch {
      // Ignore
    }
  }
};

/**
 * Log out and clear tokens
 */
export const logout = async () => {
  await signOut(auth);
  cachedAccessToken = null;
  try {
    sessionStorage.removeItem(LOCAL_TOKEN_KEY);
  } catch {
    // Ignore
  }
};
