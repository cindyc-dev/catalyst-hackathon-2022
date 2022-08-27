import { FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import app from "./init";

const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

facebookProvider.addScope('pages_manage_posts');
facebookProvider.addScope('pages_read_engagement');

export const linkToFacebook = () => {
  const auth = app.getAuth();
  app.linkWithPopup(auth.currentUser, facebookProvider).then((result) => {
    // Accounts successfully linked.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const user = result.user;
    
    return { error: false, user, credential };
  }).catch((error) => {
    // Handle Errors here.
    return { error: true, errorInfo: error};
  });
}

export const linkToTwitter = () => {
  const auth = app.getAuth();
  app.linkWithPopup(auth.currentUser, twitterProvider).then((result) => {
    // Accounts successfully linked.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const user = result.user;

    return { error: false, user, credential };
  }).catch((error) => {
    // Handle Errors here.
    return { error: true, errorInfo: error};
  });
}
