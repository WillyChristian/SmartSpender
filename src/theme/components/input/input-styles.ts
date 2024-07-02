import { StyleSheet } from 'react-native';
import { body, bodySmall } from '../../fonts';
import { Colors } from '../../colors';

export const { label, input } = StyleSheet.create({
  label: body,
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
