import { StyleSheet } from 'react-native';
import { subtitle } from '../../../theme/fonts';
import { screen } from '../../../theme/utilities';
import { Colors } from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    ...screen,
    gap: 20,
  },
  iconContainer: {
    height: 150,
    width: 140,
    backgroundColor: Colors.ACCENT,
  },
  iconLabel: {
    ...subtitle,
    color: Colors.WHITE,
  },
  formRow: {
    flexDirection: 'row',
    gap: 35,
  },
});

export const { container, iconContainer, iconLabel, formRow } = styles;
