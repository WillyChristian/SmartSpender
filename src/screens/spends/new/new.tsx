import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Input } from '../../../theme/components/input/input';
import { Button } from '../../../theme/components/button/button';
import newStyles from './new.styles';
import { ButtonTypes } from '../../../theme/components/button/button-types';
import Icon from '../../../theme/components/icons';

type NavigationProps = {
  navigate: (name: string, params?: unknown) => void;
  route: (path: unknown) => void;
};

type AddSpendScreenProps = {
  navigation: NavigationProps;
};

export const NewSpend: React.FC<AddSpendScreenProps> = ({
  navigation,
}) => {
  const {
    container,
    content,
    formRow,
    iconContainer,
    iconLabel,
  } = newStyles();
  return (
    <SafeAreaView style={container}>
      <View style={content}>
        <View style={iconContainer}>
          <Icon.MoneySpend />
          <Text style={iconLabel}>New Spend</Text>
        </View>

        <>
          <View style={formRow}>
            <Input
              placeholder="Item 1"
              label="50 / 50"
              onChange={() => {}}
              isFullWidth={false}
              type={'none'}
            />

            <Input
              placeholder="Item 2"
              label="50 / 50"
              onChange={() => {}}
              isFullWidth={false}
              type={'none'}
            />
          </View>

          <Input
            placeholder="Item 3"
            label="Full Width 1"
            onChange={() => {}}
            type={'none'}
          />

          <Input
            placeholder="Item 4"
            label="Full Width 2"
            onChange={() => {}}
            type={'none'}
          />

          <Button
            label="Submit"
            onPress={() => {}}
            type={ButtonTypes.PRIMARY}
            hasIcon
          />

          <Button
            label="Navegar"
            onPress={() =>
              navigation.navigate('spend/list')
            }
            type={ButtonTypes.PRIMARY}
            hasIcon
          />
        </>
      </View>
    </SafeAreaView>
  );
};
