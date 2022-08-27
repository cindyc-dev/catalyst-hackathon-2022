import { getAuth, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, signOut } from "firebase/auth";

const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

facebookProvider.addScope('pages_manage_posts');
facebookProvider.addScope('pages_read_engagement');

export const FacebookLogin = async () => {
  const auth = getAuth();
  return await signInWithPopup(auth, facebookProvider)
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

export const TwitterLogin = async () => {
  const auth = getAuth();
  return await signInWithPopup(auth, twitterProvider)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      return { error: false, user, token, secret };
    }).catch((error) => {
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

export const SignOut = async () => {
  const auth = getAuth();
  return await signOut(auth).then(() => {
    return { code: 200 };
  }).catch((error) => {
    // An error happened.
    return { code: error.code, message: error.message };
  });
}

