import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// types
import { User } from '@/types/models';
import { AccountType } from '@/types/shared';

const createUser = async (userInfo: FirebaseAuthTypes.UserCredential) => {
  try {
    const usersCollection = firestore().collection('users');

    const user: User = {
      id: userInfo.user.uid,
      name: userInfo.user.displayName || '',
      email: userInfo.user.email as string,
      accountType: userInfo.additionalUserInfo?.providerId as AccountType,
    };

    return await usersCollection.doc(user.id).set(user);
  } catch (error) {
    console.log('CREATE USER ERROR ->', error);
  }
};

const getUser = async (userInfo: FirebaseAuthTypes.UserCredential) => {
  try {
    const usersCollection = firestore().collection('users');
    const id = userInfo.user.uid;

    return await usersCollection.doc(id).get();
  } catch (error) {
    console.log('CREATE USER ERROR ->', error);
  }
};

export default {
  createUser,
  getUser,
};
