import React from 'react';
import { TextInput, View } from 'react-native';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  onChange: (text: string) => void;
};

export const PhoneInput = (props: TProps) => {
  const { onChange } = props;
  return (
    <View style={styles.wrapper}>
      <Typography.BoldText fontSize={34}>+7</Typography.BoldText>
      <TextInput
        autoFocus
        onChangeText={onChange}
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="999 123 45 67"
      />
    </View>
  );
};
