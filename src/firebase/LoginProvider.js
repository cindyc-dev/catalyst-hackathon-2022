import { FacebookAuthProvider } from "firebase/auth";
import app from "./init";

const provider = new FacebookAuthProvider();

provider.addScope('pages_manage_posts');
provider.addScope('pages_read_engagement');

export const FacebookLogin = () => {
  const auth = app.getAuth();
  app.signInWithPopup(auth, provider)
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
