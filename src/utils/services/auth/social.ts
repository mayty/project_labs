import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes as GoogleStatusCode,
} from '@react-native-community/google-signin';

import { OnErrorCallback } from '@/types/shared';

export const signInWithGoogle = async (onError?: OnErrorCallback) => {
  try {
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return await auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === GoogleStatusCode.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      onError && onError(error);
    } else if (error.code === GoogleStatusCode.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      onError && onError(error);
    } else if (error.code === GoogleStatusCode.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      onError && onError(error);
    } else {
      // some other error happened
      onError && onError(error);
    }
  }
};
