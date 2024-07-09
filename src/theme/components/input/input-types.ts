import {
  InputModeOptions,
  TextInputProps,
} from 'react-native';
export default interface InputProps extends TextInputProps {
  onChange: (value: unknown) => unknown;
  placeholder: string;
  label?: string;
  isFullWidth?: boolean;
  type: InputModeOptions;
}
