import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Input } from '../../../theme/components/input/input';
import { Button } from '../../../theme/components/button/button';
import { container, formRow, iconContainer, iconLabel } from './new.styles';
import { ButtonTypes } from '../../../theme/components/button/button-types';

export const NewSpend = () => {
  return (
    <SafeAreaView style={container}>
      <View style={iconContainer}>
        {/* <Ico>carteira</Ico> */}
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

        <Input placeholder="Item 3" label="Full 1" onChange={() => {}} />

        <Input placeholder="Item 4" label="Full 1" onChange={() => {}} />

        <Button label="Submit" onPress={() => {}} type={ButtonTypes.PRIMARY} />

        {/* <Ico>Plus</Ico> */}
      </>
    </SafeAreaView>
  );
};
