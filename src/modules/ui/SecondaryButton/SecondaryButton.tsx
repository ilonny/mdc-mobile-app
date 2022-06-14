import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { TouchableFeedback, Typography } from '..';
import { styles } from './styles';

type TProps = {
  disabled?: boolean;
  children: string;
  bold?: boolean;
  isWhite?: boolean;
} & TouchableOpacityProps;

export const SecondaryButton = (props: TProps) => {
  const { disabled, onPress, children, bold, isWhite } = props;
  if (disabled) {
    return (
      <View style={[styles.wrapper, styles.wrapperDisabled]}>{children}</View>
    );
  }
  return (
    <TouchableFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <Typography.SecondaryButtonText bold={bold} isWhite={isWhite}>
          {children}
        </Typography.SecondaryButtonText>
      </View>
    </TouchableFeedback>
  );
};
