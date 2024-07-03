import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Input } from '../../../theme/components/input/input';
import { Button } from '../../../theme/components/button/button';
import newStyles from './new.styles';
import { ButtonTypes } from '../../../theme/components/button/button-types';
import Icon from '../../../theme/components/icons';

export const NewSpend = () => {
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
          <Text style={iconLabel}>Spend</Text>
        </View>

        <>
          <View style={formRow}>
            <Input
              placeholder="Item 1"
              label="50 / 50"
              onChange={() => {}}
              isFullWidth={false}
            />

            <Input
              placeholder="Item 2"
              label="50 / 50"
              onChange={() => {}}
              isFullWidth={false}
            />
          </View>

          <Input
            placeholder="Item 3"
            label="Full Width 1"
            onChange={() => {}}
          />

          <Input
            placeholder="Item 4"
            label="Full Width 2"
            onChange={() => {}}
          />

          <Button
            label="Submit"
            onPress={() => {}}
            type={ButtonTypes.PRIMARY}
            hasIcon
          />
        </>
      </View>
    </SafeAreaView>
  );
};
