import { StyleSheet } from 'react-native';
import styleUtilities from '../../utilities';

export default function searchStyle() {
  const { fullWidth } = styleUtilities();
  return StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      position: 'relative',
    },
    search: {
      ...fullWidth,
    },
    iconContainer: {
      position: 'absolute',
      right: 20,
      bottom: 12,
      top: 12,
    },
  });
}
