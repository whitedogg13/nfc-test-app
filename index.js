/**
 * @format
 */

import {AppRegistry} from 'react-native';
import NfcAppIndexV2 from 'react-native-nfc-manager/example/AppIndexV2'
import NfcAppV2Apdu from 'react-native-nfc-manager/example/AppV2Apdu'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NfcAppV2Apdu);
