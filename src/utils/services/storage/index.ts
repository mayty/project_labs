import AsyncStorage from '@react-native-async-storage/async-storage';

// utils
import { TOKEN_KEY, USER_ID_KEY } from '@/utils/constants/storage';

// types
import { ID } from '@/types/shared';

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.log('GET TOKEN ERROR ->', error);
  }
};

export const storeToken = async (token: string) => {
  try {
    return await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.log('STORE TOKEN ERROR ->', error);
  }
};

export const removeToken = async () => {
  try {
    return await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.log('REMOVE TOKEN ERROR ->', error);
  }
};

export const getUserId = async () => {
  try {
    return await AsyncStorage.getItem(USER_ID_KEY);
  } catch (error) {
    console.log('GET TOKEN ERROR ->', error);
  }
};

export const storeUserId = async (id: ID) => {
  try {
    return await AsyncStorage.setItem(USER_ID_KEY, id);
  } catch (error) {
    console.log('STORE TOKEN ERROR ->', error);
  }
};

export const removeUserId = async () => {
  try {
    return await AsyncStorage.removeItem(USER_ID_KEY);
  } catch (error) {
    console.log('REMOVE TOKEN ERROR ->', error);
  }
};

// export const getNotificationsSettings = async () => {
//   try {
//     const value = await AsyncStorage.getItem(NOTIFICATIONS_SETTINGS_KEY);
//     return value === 'true';
//   } catch (error) {
//     console.log('GET NOTIFICATIONS SETTINGS ERROR ->', error);
//   }
// };

// export const storeNotificationsSettings = async (value: boolean) => {
//   try {
//     return await AsyncStorage.setItem(NOTIFICATIONS_SETTINGS_KEY, String(value));
//   } catch (error) {
//     console.log('STORE NOTIFICATIONS SETTINGS ERROR ->', error);
//   }
// };
