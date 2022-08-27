// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { FacebookLogin, TwitterLogin } from "./LoginProvider";
import { LinkToFacebook, LinkToTwitter } from "./LinkAccounts";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: "catalyst-hackathon-2022",
  storageBucket: "catalyst-hackathon-2022.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Login = (method) => {
  switch (method) {
    case 'facebook':
      FacebookLogin();
      break;
    case 'twitter':
      TwitterLogin();
      break;
    default:
      return;
  }
}

export const Link = (method) => {
  switch (method) {
    case 'facebook':
      LinkToFacebook();
      break;
    case 'twitter':
      LinkToTwitter();
      break;
    default:
      return;
  }
}

export default app;
