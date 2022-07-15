import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type TProps = {
  fullWidth?: boolean;
  children: JSX.Element | JSX.Element[];
  isRed?: boolean;
  isGreen?: boolean;
};

export const Panel = (props: TProps) => {
  const { fullWidth, children, isRed, isGreen } = props;
  return (
    <View
      style={[
        styles.wrapper,
        fullWidth && styles.wrapperFullWidth,
        isRed && styles.wrapperIsRed,
        isGreen && styles.wrapperIsGreen
      ]}>
      {children}
    </View>
  );
};
