// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { FacebookLogin, TwitterLogin } from "./LoginProvider";
import { LinkToFacebook, LinkToTwitter } from "./LinkAccounts";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const Login = async (method) => {
  switch (method) {
    case 'facebook':
      return await FacebookLogin();
    case 'twitter':
      return await TwitterLogin();
    default:
      return;
  }
}

export const Link = (method) => {
  switch (method) {
    case 'facebook':
      return LinkToFacebook();
    case 'twitter':
      return LinkToTwitter();
    default:
      return;
  }
}

export const auth = getAuth();

export default app;
