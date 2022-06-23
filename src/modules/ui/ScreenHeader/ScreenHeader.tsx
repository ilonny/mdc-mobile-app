import React, { useCallback } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ImageView, ImageSource, Typography } from '../../ui';
import { colors } from '../../../theme';

export type THeaderProps = {
  backButton?: boolean;
  closeRightButton?: boolean;
  rightButton?: JSX.Element;
  title?: string;
  titleOpacity?: Animated.Value;
  isBlue?: boolean;
  topLine?: boolean;
  onPressBackButton?: () => void;
};
export const ScreenHeader = (props: THeaderProps) => {
  const {
    backButton,
    rightButton,
    closeRightButton,
    title,
    titleOpacity,
    isBlue,
    topLine,
    onPressBackButton,
  } = props;
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    if (typeof onPressBackButton === 'function') {
      onPressBackButton();
    } else {
      navigation.goBack();
    }
  }, [navigation, onPressBackButton]);

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.btnWrap}>
        {!!backButton && (
          <TouchableOpacity
            onPress={goBack}
            style={[styles.btnWrap, styles.btnWrapLeft]}>
            <ImageView
              style={styles.leftIcon}
              source={ImageSource.chevron_back}
              tintColorProp={colors.secondaryGray}
            />
          </TouchableOpacity>
        )}
      </View>
      {title && (
        <Animated.View
          style={{
            // opacity: titleOpacity,
            maxWidth: 250,
          }}>
          <Typography.BoldText numberOfLines={1}>{title}</Typography.BoldText>
        </Animated.View>
      )}
      {topLine && <View style={styles.topLine} />}
      <View style={styles.btnWrap}>
        {closeRightButton ? (
          <TouchableOpacity
            onPress={goBack}
            style={[styles.btnWrap, styles.btnWrapRight]}>
            <ImageView style={styles.leftIcon} source={ImageSource.close} />
          </TouchableOpacity>
        ) : (
          !!rightButton && rightButton
        )}
      </View>
    </View>
  );
};
