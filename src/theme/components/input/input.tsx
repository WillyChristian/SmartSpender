import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import InputProps from './input-types';
import inputStyle from './input-styles';
import styleUtilities from '../../utilities';
import { Colors } from '../../colors';

export const Input: FC<InputProps> = ({
  placeholder,
  label,
  isFullWidth = true,
  type,
  onChange,
}) => {
  const { input, labelText, inputContainer } = inputStyle();
  const { halfWidth, fullWidth } = styleUtilities();
  return (
    <View style={inputContainer}>
      {label && <Text style={labelText}>{label}</Text>}
      <TextInput
        style={[input, isFullWidth ? fullWidth : halfWidth]}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={Colors.PRIMARY_500}
        inputMode={type}
      />
    </View>
  );
};
