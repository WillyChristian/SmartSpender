import React, { FC } from 'react';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';
import InputProps from './input-types';
import inputStyle from './input-styles';

export const Input: FC<InputProps> = ({
  placeholder,
  label,
  isFullWidth = true,
  onChange,
}) => {
  const { width } = useWindowDimensions();
  const { input, labelText, inputContainer } = inputStyle();
  const halfInput = width / 2 - 40;

  return (
    <View style={inputContainer}>
      {label && <Text style={labelText}>{label}</Text>}
      <TextInput
        style={[input, { width: isFullWidth ? undefined : halfInput }]}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </View>
  );
};
