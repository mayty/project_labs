import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from 'components/App';
import { name as appName } from '../app.json';

import initSocialAuth from '@/utils/services/auth/init';

const initApp = () => {
  initSocialAuth();

  return AppRegistry.registerComponent(appName, () => App);
};

export default initApp;
