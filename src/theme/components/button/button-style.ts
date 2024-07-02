import { StyleSheet } from 'react-native';
import { Colors } from '../../colors';
import { bodySmall } from '../../fonts';

export const { base, btnPrimary, btnSecondary, btnAlert, btnAccent } =
  StyleSheet.create({
    base: {
      ...bodySmall,
      textTransform: 'uppercase',
      fontWeight: '800',
    },
    btnPrimary: {
      backgroundColor: Colors.TERTIARY_600,
      color: Colors.WHITE,
    },
    btnSecondary: {},
    btnAlert: {},
    btnAccent: {},
  });
