import React from 'react';
import { TouchableOpacityProps, View, ActivityIndicator } from 'react-native';
import { TouchableFeedback } from '../../ui';
import { styles } from './styles';

type TProps = {
  disabled?: boolean;
  isBlack?: boolean;
  isLoading?: boolean;
  isWhite?: boolean;
  isTransparent?: boolean;
  smallHeight?: boolean;
  isBlue?: boolean;
} & TouchableOpacityProps;

export const Button = (props: TProps) => {
  const {
    disabled,
    onPress,
    children,
    isBlack,
    isLoading,
    isWhite,
    isTransparent,
    smallHeight,
    isBlue,
  } = props;
  if (disabled) {
    return (
      <View style={[styles.wrapper, styles.wrapperDisabled]}>{children}</View>
    );
  }
  return (
    <TouchableFeedback onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          isBlack && styles.wrapperBlack,
          isWhite && styles.wrapperWhite,
          isBlue && styles.wrapperBlue,
          isTransparent && styles.wrapperTransparent,
          smallHeight && styles.smallHeightWrapper,
        ]}>
        {isLoading ? <ActivityIndicator /> : children}
      </View>
    </TouchableFeedback>
  );
};