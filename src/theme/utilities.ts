import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export default function styleUtilities() {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.PRIMARY_000,
    },
    screen: {
      flex: 1,
      backgroundColor: Colors.PRIMARY_000,
      paddingHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    consoleLog: {
      borderWidth: 2,
      borderColor: '#fff',
    },
  });
}
