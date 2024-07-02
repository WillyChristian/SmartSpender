import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const utilities = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_000,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});

export const { row, screen } = utilities;
