import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  children: string | string[];
};

export const Badge = (props: TProps) => {
  const { children } = props;
  return (
    <View style={styles.wrapper}>
      <Typography.BoldText color={colors.totalBlack} textAlign="center">
        {children}
      </Typography.BoldText>
    </View>
  );
};
