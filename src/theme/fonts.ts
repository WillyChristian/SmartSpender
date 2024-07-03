import { StyleSheet } from 'react-native';

export default function fontStyles() {
  return StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: '700',
    },
    body: {
      fontSize: 16,
      fontWeight: '500',
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400',
    },
    caption: {
      fontSize: 12,
      fontWeight: '200',
    },
  });
}
