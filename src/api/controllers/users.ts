import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// types
import { User } from '@/types/models';
import { AccountType, ID } from '@/types/shared';

// utils
import { NOTES_COLLECTION, USERS_COLLECTION } from '@/utils/constants/api';

const createUser = async (userInfo: FirebaseAuthTypes.UserCredential) => {
  try {
    const usersCollection = firestore().collection(USERS_COLLECTION);

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
    const usersCollection = firestore().collection(USERS_COLLECTION);
    const id = userInfo.user.uid;

    return await usersCollection.doc(id).get();
  } catch (error) {
    console.log('CREATE USER ERROR ->', error);
  }
};

const getUserById = async (id: string): Promise<User | undefined> => {
  try {
    const user = await firestore().collection(USERS_COLLECTION).doc(id).get();

    return user.data() as User;
  } catch (error) {
    console.log('GET USER BY ID ERROR ->', error);
  }
};

const removeUser = async (id: ID) => {
  try {
    const userNotesCollection = await firestore()
      .collection(NOTES_COLLECTION)
      .where('owner', '==', id)
      .get();

    await Promise.all([userNotesCollection.forEach((doc) => doc.ref.delete())]);
    await firestore().collection(USERS_COLLECTION).doc(id).delete();

    await auth().signOut();
  } catch (error) {
    console.log('REMOVE USER ERROR ->', error);
  }
};

export default {
  createUser,
  getUser,
  getUserById,
  removeUser,
};
