import { StyleSheet } from 'react-native';
import fontStyle from '../../../theme/fonts';
import styleUtilities from '../../../theme/utilities';
import { Colors } from '../../../theme/colors';

export default function newStyles() {
  const { screen, safeArea } = styleUtilities();
  const { subtitle } = fontStyle();

  return StyleSheet.create({
    container: safeArea,
    content: {
      ...screen,
      gap: 20,
      paddingTop: 90,
    },
    iconContainer: {
      alignSelf: 'center',
      gap: 20,
    },
    iconLabel: {
      ...subtitle,
      color: Colors.WHITE,
      textAlign: 'center',
    },
    formRow: {
      flexDirection: 'row',
      gap: 35,
    },
  });
}
