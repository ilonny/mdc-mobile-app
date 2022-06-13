import React, { useCallback, useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import { styles } from './styles';

type TProps = {
  activeIndex: number;
  localIndex: number;
  setActiveIndex: (number: number) => void;
  lastIndex: number;
  callback: any;
};

const DURATION = 2000;

export const StoriesProgressLine = (props: TProps) => {
  const { activeIndex, localIndex, setActiveIndex, lastIndex, callback } = props;
  const primaryLineWidth = useRef(new Animated.Value(0)).current;

  const width = primaryLineWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const startAnimation = useCallback(
    duration => {
      callback();
      Animated.timing(primaryLineWidth, {
        toValue: 1,
        useNativeDriver: false,
        duration,
        easing: Easing.ease,
      }).start(() => {
        // callback();
        // if (duration > 1) {
        //   setActiveIndex(
        //     localIndex === lastIndex ? localIndex : localIndex + 1,
        //   );
        //   // if (localIndex === activeIndex) {
        //   // }
        // }
      });
    },
    [lastIndex, localIndex, activeIndex, callback],
  );

  const resetAnimation = useCallback(() => {
    Animated.timing(primaryLineWidth, {
      toValue: 0,
      useNativeDriver: false,
      duration: 1,
      easing: Easing.ease,
    }).start();
  }, []);

  useEffect(() => {
    console.log('activeIndex, localIndex', activeIndex, localIndex);
    if (localIndex >= activeIndex) {
      resetAnimation();
      // return;
    }
    if (localIndex < activeIndex) {
      startAnimation(1);
      // return;
    }
    if (activeIndex === localIndex) {
      // console.log('start ', localIndex, primaryLineWidth);
      // startAnimation(1);
      resetAnimation();
      setTimeout(() => {
        startAnimation(DURATION);
      }, 100);
      return;
    }
  }, [
    activeIndex,
    localIndex,
    startAnimation,
    primaryLineWidth,
    resetAnimation,
  ]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.secondaryLine} />
      <Animated.View style={[styles.primaryLine, { width }]} />
    </View>
  );
};
