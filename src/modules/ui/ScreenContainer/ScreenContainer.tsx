import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { ImageView, ImageSource } from '../ImageView';
import { TImageSource } from '../ImageView/ImageSource';
import { styles } from './styles';

type TProps = {
  disableScroll?: boolean;
  fullscreen?: boolean;
  children: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
  backgroundImage?: TImageSource;
};

export const ScreenContainer = (props: TProps) => {
  const { disableScroll, fullscreen, children, backgroundImage } = props;
  return (
    <View style={[styles.wrapper]}>
      {!!backgroundImage && (
        <ImageView
          source={ImageSource[backgroundImage]}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      )}
      <SafeAreaView />
      <KeyboardAvoidingView style={styles.areaWrapper} behavior="padding">
        {disableScroll ? (
          <SafeAreaView style={[styles.nonScrollWrapper]}>
            <View
              style={[
                styles.scrollContent,
                fullscreen && styles.scrollContentFullscreen,
                styles.nonScrollWrapper,
              ]}>
              {children}
            </View>
          </SafeAreaView>
        ) : (
          <ScrollView
            scrollEventThrottle={100}
            contentContainerStyle={[
              styles.scrollContent,
              fullscreen && styles.scrollContentFullscreen,
            ]}>
            {children}
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};
