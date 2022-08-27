import { getAuth, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

facebookProvider.addScope('pages_manage_posts');
facebookProvider.addScope('pages_read_engagement');

export const FacebookLogin = () => {
  const auth = getAuth();
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      return { error: false, user, accessToken };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      return { error: true, errorCode, errorMessage, email, credential };
    });
}

export const TwitterLogin = () => {
  const auth = getAuth();
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      return { error: false, user, accessToken };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);

      return { error: true, errorCode, errorMessage, email, credential };
    });
}
