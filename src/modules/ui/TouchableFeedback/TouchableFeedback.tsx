import React, { useCallback } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export const TouchableFeedback = (props: TouchableOpacityProps) => {
  const onPressCb = useCallback(
    e => {
      e.stopPropagation();
      ReactNativeHapticFeedback.trigger('impactLight', options);
      if (typeof props.onPress === 'function') {
        props.onPress(e);
      }
    },
    [props],
  );
  return (
    <TouchableOpacity
      onPress={onPressCb}
      activeOpacity={0.8}
      style={props.style}>
      {props.children}
    </TouchableOpacity>
  );
};
