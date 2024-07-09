import React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import inputStyle from '../input/input-styles';
import Icon from '../icons';
import searchStyle from './search.styles';
import { Colors } from '../../colors';

interface SearchProps extends TextInputProps {
  onSearch: (e: unknown) => void;
  hasIcon?: boolean;
}

export const Search: React.FC<SearchProps> = ({
  onSearch,
  hasIcon = false,
  ...props
}) => {
  const [param, setParam] = React.useState<unknown>('');
  const { input, inputContainer } = inputStyle();
  const { searchContainer, search, iconContainer } =
    searchStyle();

  return (
    <View style={[inputContainer, searchContainer]}>
      <TextInput
        style={[input, search]}
        onChangeText={(value) => setParam(value)}
        inputMode="search"
        placeholderTextColor={Colors.PRIMARY_500}
        {...props}
      />
      {hasIcon && (
        <TouchableOpacity
          style={iconContainer}
          onPress={() => onSearch(param)}>
          <Icon.Search
            height={40 - 24}
            width={40 - 24}
            color={Colors.PRIMARY_500}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
