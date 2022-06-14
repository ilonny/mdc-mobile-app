import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
} from 'react';
import {
  TextInput as TextInputNative,
  TextInputProps,
  Animated,
  Easing,
  View,
} from 'react-native';
import { Typography, ImageSource, ImageView } from '../../ui';
import { TImageSource } from '../../ui/ImageView/ImageSource';
import { colors } from '../../../theme';
import { styles } from './styles';
import isObject from 'lodash/isObject';

type TProps = {
  label?: string;
  isGray?: boolean;
  searchIcon?: boolean;
  error?: boolean;
  isSmall?: boolean;
  rightIconName?: TImageSource;
  onBlur?: (event?: React.FocusEvent<HTMLElement, Element> | undefined) => void; //HTMLElement because react-final-form is not supporting RN.
  onFocus?: (
    event?: React.FocusEvent<HTMLElement, Element> | undefined,
  ) => void;
} & Omit<TextInputProps, 'onBlur' | 'onFocus'>;

const ORIGINAL_COLOR = 'rgba(255, 255, 255, 0)';
const SUCCESS_COLOR = colors.red;
const ORIGINAL_VALUE = 0;
const SUCCESS_VALUE = 1;

export const TextInput = forwardRef((props: TProps, ref) => {
  const {
    label,
    isGray,
    isSmall,
    searchIcon,
    error,
    onBlur,
    onFocus,
    rightIconName,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const interpolatedColor = useRef(new Animated.Value(ORIGINAL_VALUE)).current;

  const borderColor = interpolatedColor.interpolate({
    inputRange: [ORIGINAL_VALUE, SUCCESS_VALUE],
    outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR],
  });

  useEffect(() => {
    Animated.timing(interpolatedColor, {
      toValue: isFocused ? SUCCESS_VALUE : ORIGINAL_VALUE,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isFocused, interpolatedColor, props.value]);

  const onFocusCallback = useCallback(() => {
    if (typeof onFocus === 'function') {
      onFocus();
    }
    setIsFocused(true);
  }, [onFocus]);

  const onBlurCallback = useCallback(() => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur();
    }
  }, [onBlur]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        isGray && styles.wrapperGray,
        !label && styles.wrapperNoLabel,
        searchIcon && styles.wrapperSearch,
        isSmall && styles.wrapperSmall,
        { borderColor },
        error && styles.wrapperError,
      ]}>
      {!!label && (
        <Typography.InputLabel isFocused={isFocused}>
          {label}
        </Typography.InputLabel>
      )}
      <TextInputNative
        {...props}
        value={isObject(props.value) ? props.value?.description : props.value}
        //@ts-ignore
        ref={ref}
        style={[styles.input, !label && !isSmall && styles.inputNoLabel]}
        onFocus={onFocusCallback}
        onBlur={onBlurCallback}
        placeholderTextColor={colors.secondaryText}
      />
      {isObject(props.value) && (
        <View style={styles.labelInputOverlay}>
          <Typography.MainText numberOfLines={1}>
            {props.value?.description}
          </Typography.MainText>
        </View>
      )}
      {/* {!!searchIcon && (
        <ImageView source={ImageSource.search} style={styles.searchIcon} />
      )} */}
      {!!rightIconName && (
        <ImageView
          source={ImageSource[rightIconName]}
          style={styles.rightIcon}
          tintColorProp={colors.secondaryText}
        />
      )}
    </Animated.View>
  );
});
