import auth from '@react-native-firebase/auth';

// types
import { OnErrorCallback } from '@/types/shared';

export const signInManually = async (email: string, password: string, onError: OnErrorCallback) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    onError(error);
  }
};

export const signUpManually = async (email: string, password: string, onError: OnErrorCallback) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    onError(error);
  }
};
