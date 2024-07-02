import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps, ObjType } from './button-types';
import {
  base,
  btnPrimary,
  btnSecondary,
  btnAlert,
  btnAccent,
} from './button-style';

export const Button: FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
  type,
}) => {
  const renderContent = (obj: ObjType) => (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={obj}>
      <Text style={[base, obj]}>{label}</Text>
    </TouchableOpacity>
  );

  return {
    primary: renderContent(btnPrimary),
    secondary: renderContent(btnSecondary),
    alert: renderContent(btnAlert),
    accent: renderContent(btnAccent),
  }[type];
};
