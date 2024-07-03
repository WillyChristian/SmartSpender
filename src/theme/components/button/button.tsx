import React, { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { ButtonProps, ObjType } from './button-types';
import buttonStyle from './button-style';
import Icon from '../icons';

export const Button: FC<ButtonProps> = ({
  label,
  disabled = false,
  type,
  hasIcon = false,
  onPress,
}) => {
  const {
    baseText,
    baseContainer,
    iconContainer,
    btnPrimary,
    btnSecondary,
    btnAlert,
    btnAccent,
  } = buttonStyle({ hasIcon });

  const renderContent = (obj: ObjType) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[obj, baseContainer]}>
      <View style={iconContainer}>
        <Text style={[baseText, obj]}>{label}</Text>
        {hasIcon && <Icon.PlusWhite />}
      </View>
    </TouchableOpacity>
  );

  return {
    primary: renderContent(btnPrimary),
    secondary: renderContent(btnSecondary),
    alert: renderContent(btnAlert),
    accent: renderContent(btnAccent),
  }[type];
};
