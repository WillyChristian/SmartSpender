import { StyleSheet } from 'react-native';
import fontStyle from '../../fonts';
import { Colors } from '../../colors';

export default function inputStyle() {
  const { body, bodySmall } = fontStyle();
  return StyleSheet.create({
    labelText: {
      ...body,
      color: Colors.WHITE,
    },
    inputContainer: {
      flexDirection: 'column',
      gap: 14,
    },
    input: {
      borderWidth: 2,
      borderColor: Colors.PRIMARY_500,
      backgroundColor: Colors.WHITE,
      ...bodySmall,
      borderRadius: 10,
      color: Colors.PRIMARY_500,
      paddingVertical: 12,
      paddingHorizontal: 5,
    },
  });
}
