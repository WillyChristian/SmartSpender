import { StyleSheet } from 'react-native';
import { Colors } from '../../colors';
import fontStyle from '../../fonts';

type BtnStyleProps = {
  hasIcon?: boolean;
};

export default function buttonStyles({
  hasIcon,
}: BtnStyleProps) {
  const { bodySmall } = fontStyle();
  return StyleSheet.create({
    baseText: {
      ...bodySmall,
      textTransform: 'uppercase',
      fontWeight: '800',
    },
    baseContainer: {
      paddingVertical: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Colors.TERTIARY_300,
      height: 50,
    },
    iconContainer: {
      gap: hasIcon ? 16 : undefined,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnPrimary: {
      backgroundColor: Colors.TERTIARY_600,
      color: Colors.WHITE,
    },
    btnSecondary: {},
    btnAlert: {},
    btnAccent: {},
  });
}
