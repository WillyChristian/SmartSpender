import Reactotron from 'reactotron-react-native';
import { NativeModules, Platform } from 'react-native';

const name = 'SmartSpender';
const url = NativeModules.SourceCode.scriptURL;
const host =
  Platform.OS === 'ios' ? url.split('://')[1].split(':')[0] : 'localhost';

console.log = Reactotron.log;

const tron = Reactotron.configure({
  name,
  host,
}).useReactNative();

export default tron;
