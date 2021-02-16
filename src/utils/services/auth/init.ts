import { GoogleSignin } from '@react-native-community/google-signin';

export default () => {
  GoogleSignin.configure({
    webClientId: '125841873210-v6a6abkcvfaba7tmka01ltte7lmefo4p.apps.googleusercontent.com',
  });
};
