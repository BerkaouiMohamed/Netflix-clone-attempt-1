import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCdxvpnNMsFzY-fG4f1Dl7oeadcfjmrt4I",
    authDomain: "netflix-fbfb5.firebaseapp.com",
    projectId: "netflix-fbfb5",
    storageBucket: "netflix-fbfb5.appspot.com",
    messagingSenderId: "561097137126",
    appId: "1:561097137126:web:6e558c833e4084ad1f9427",
    measurementId: "G-TM2X30SNKM"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getAnalytics(app);


 
export default storage;