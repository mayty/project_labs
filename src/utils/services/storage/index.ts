import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from '@/utils/constants/storage';

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
