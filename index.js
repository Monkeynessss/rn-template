/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './core/modifyPrototypes';

AppRegistry.registerComponent(appName, () => App);
