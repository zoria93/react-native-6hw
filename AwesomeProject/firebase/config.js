import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCK1X215FS9inOjspKoLyAtxhN7GNw0_TA",
  authDomain: "react-native-hw6-3b7ea.firebaseapp.com",
  projectId: "react-native-hw6-3b7ea",
  storageBucket: "react-native-hw6-3b7ea.appspot.com",
  messagingSenderId: "429040113271",
  appId: "1:429040113271:web:e2e8b73c8fca728536d872",
  measurementId: "G-8DCZCTFBTD",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
