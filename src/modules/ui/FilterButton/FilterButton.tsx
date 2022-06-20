import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  children: string;
  isActive?: boolean;
};

export const FilterButton = (props: TProps) => {
  const { children, isActive } = props;
  return (
    <View style={[styles.wrapper, isActive && styles.wrapperActive]}>
      <Typography.BoldText
        fontSize={16}
        textAlign="center"
        color={isActive ? colors.totalBlack : '#fff'}>
        {children}
      </Typography.BoldText>
    </View>
  );
};
