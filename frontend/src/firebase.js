import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-3RRKA5-3nzEYPohSWrGjm_dk_9OTc_A",
  authDomain: "visionaray-tales.firebaseapp.com",
  projectId: "visionaray-tales",
  storageBucket: "visionaray-tales.firebasestorage.app",
  messagingSenderId: "522241703134",
  appId: "1:522241703134:web:19a1bb538c9477a237d64f",
  measurementId: "G-5PQ2CERCDP"
};

const app = initializeApp(firebaseConfig);
export default app;
