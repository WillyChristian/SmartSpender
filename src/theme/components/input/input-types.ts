export default interface InputProps {
  onChange: (text: string) => void;
  placeholder: string;
  label?: string;
  isFullWidth?: boolean;
}
