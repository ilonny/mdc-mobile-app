import React from 'react';
import { View, FlexStyle } from 'react-native';
import { styles } from './styles';

type TProps = {
  children: JSX.Element | JSX.Element[];
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  flexWrap?: FlexStyle['flexWrap'];
  column?: boolean;
  negativeMargin?: boolean;
  flex?: FlexStyle['flex'];
};

export const Row: React.FC<TProps> = ({
  children,
  justifyContent,
  flexWrap,
  alignItems,
  column,
  negativeMargin,
  flex,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        justifyContent && { justifyContent },
        alignItems && { alignItems },
        flexWrap && { flexWrap },
        flex ? { flex } : {},
        column && styles.wrapperColumn,
        negativeMargin && styles.wrapperNegativeMargin,
      ]}>
      {children}
    </View>
  );
};
