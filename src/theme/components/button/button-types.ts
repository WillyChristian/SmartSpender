import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ALERT = 'alert',
  ACCENT = 'accent',
}

export type ObjType = ViewStyle | ImageStyle | TextStyle;

export interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  type: ButtonTypes;
}
