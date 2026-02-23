import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAqtk2RZWI3IzTCqCGqGvSpF_IrTGH9JXA",
authDomain: "firebass-expore.firebaseapp.com",
projectId: "firebass-expore",
appId: "1:928664882087:web:1b090d9c58cff9043f0482"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);
