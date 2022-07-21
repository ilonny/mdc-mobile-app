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
  paddingHorizontal?: number;
  marginHorizontal?: number;
  fullWidth?: boolean;
};

export const Row: React.FC<TProps> = ({
  children,
  justifyContent,
  flexWrap,
  alignItems,
  column,
  negativeMargin,
  flex,
  paddingHorizontal,
  marginHorizontal,
  fullWidth,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        justifyContent && { justifyContent },
        alignItems && { alignItems },
        flexWrap && { flexWrap },
        paddingHorizontal ? { paddingHorizontal } : {},
        marginHorizontal ? { marginHorizontal } : {},
        flex ? { flex } : {},
        column && styles.wrapperColumn,
        negativeMargin && styles.wrapperNegativeMargin,
        fullWidth && styles.fullWidth,
      ]}>
      {children}
    </View>
  );
};
