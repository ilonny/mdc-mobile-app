import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './styles';

type TText = {
  children: string | string[];
  textAlign?: TextStyle['textAlign'];
};

type TBoldText = {
  children: string | string[];
  fontSize?: number;
  color?: TextStyle['color'];
  textAlign?: TextStyle['textAlign'];
  lineHeight?: TextStyle['lineHeight'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  numberOfLines?: number;
  flex?: number;
};

export const ScreenTitle: React.FC<
  TText & {
    small?: boolean;
    primary?: boolean;
    white?: boolean;
    fontSize?: number;
  }
> = ({ children, small, primary, white, textAlign, fontSize }) => {
  return (
    <Text
      style={[
        styles.screenTitle,
        small && styles.screenTitleSmall,
        primary && styles.screenTitlePrimary,
        white && styles.screenTitleWhite,
        textAlign && { textAlign },
        !!fontSize && { fontSize },
      ]}>
      {children}
    </Text>
  );
};

export const TitleDescription: React.FC<TText & { color?: string }> = ({
  children,
  textAlign,
  color,
}) => {
  return (
    <Text
      style={[
        styles.titleDescription,
        !!textAlign && { textAlign },
        !!color && { color },
      ]}>
      {children}
    </Text>
  );
};

export const InputLabel: React.FC<TText & { isFocused?: boolean }> = ({
  isFocused,
  children,
}) => {
  return (
    <Text style={[styles.inputLabel, isFocused && styles.inputLabelFocused]}>
      {children}
    </Text>
  );
};

export const MainText: React.FC<
  TText & {
    fontSize?: number;
    color?: string;
    lineHeight?: number;
    numberOfLines?: number;
  }
> = ({ children, fontSize, color, textAlign, lineHeight, numberOfLines }) => {
  return (
    <Text
      style={[
        styles.mainText,
        !!fontSize && { fontSize },
        !!color && { color },
        !!textAlign && { textAlign },
        !!lineHeight && { lineHeight },
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export const ButtonText: React.FC<TText & { color?: string }> = ({
  children,
  color,
}) => {
  return (
    <Text style={[styles.buttonText, !!color && { color }]}>{children}</Text>
  );
};

export const SecondaryButtonText: React.FC<
  TText & { bold?: boolean; isWhite?: boolean }
> = ({ children, bold, isWhite }) => {
  return (
    <Text
      style={[
        styles.secondaryButtonText,
        bold && styles.secondaryButtonTextBold,
        isWhite && styles.secondaryButtonTextWhite,
      ]}>
      {children}
    </Text>
  );
};

export const GrayBoldText: React.FC<TText> = ({ children }) => {
  return <Text style={styles.grayBoldText}>{children}</Text>;
};

export const BoldText: React.FC<TBoldText> = ({
  children,
  color,
  fontSize,
  textAlign,
  lineHeight,
  textDecorationLine,
  numberOfLines,
  flex,
}) => {
  return (
    <Text
      style={[
        styles.boldText,
        !!color && { color },
        !!fontSize && { fontSize },
        !!textAlign && { textAlign },
        !!lineHeight && { lineHeight },
        !!textDecorationLine && { textDecorationLine },
        !!flex && { flex },
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
