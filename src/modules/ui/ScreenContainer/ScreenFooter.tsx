import React from 'react';
import { LayoutAnimation } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { Indent } from '../Indent';
import { styles } from './styles';

type TProps = {
  children: JSX.Element | JSX.Element[];
  isWhite?: boolean;
  footerPadding?: boolean;
  isBlue?: boolean;
};

export const ScreenFooter = (props: TProps) => {
  const { children, isWhite, footerPadding, isBlue } = props;
  return (
    <KeyboardAccessoryView
      animationConfig={{
        duration: 180,
        update: {
          type: LayoutAnimation.Types.linear,
          delay: 0,
        },
      }}
      alwaysVisible={true}
      hideBorder
      inSafeAreaView={true}
      androidAdjustResize
      style={[
        styles.footer,
        // isWhite && styles.wrapperWhite,
        // isBlue && styles.wrapperBlue,
        footerPadding && styles.footerPadding,
      ]}>
      {children}
      <Indent height={20} />
    </KeyboardAccessoryView>
  );
};
