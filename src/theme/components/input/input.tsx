import React, { FC } from 'react';
import { Text, TextInput, useWindowDimensions } from 'react-native';
import InputProps from './input-types';
import { input, label as L } from './input-styles';

export const Input: FC<InputProps> = ({
  placeholder,
  label,
  isFullWidth = true,
  onChange,
}) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {label && <Text style={L}>{label}</Text>}
      <TextInput
        style={[input, { width: isFullWidth ? undefined : width / 2 }]}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </>
  );
};
