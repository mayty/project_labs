import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from 'components/App';
import { name as appName } from '../app.json';

const initApp = () => AppRegistry.registerComponent(appName, () => App);

export default initApp;
