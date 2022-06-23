import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type TProps = {
  fullWidth?: boolean;
  children: JSX.Element | JSX.Element[];
};

export const Panel = (props: TProps) => {
  const { fullWidth, children } = props;
  return (
    <View style={[styles.wrapper, fullWidth && styles.wrapperFullWidth]}>
      {children}
    </View>
  );
};
