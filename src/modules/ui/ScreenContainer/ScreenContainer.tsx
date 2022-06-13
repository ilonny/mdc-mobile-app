import React from 'react';
import Video from 'react-native-video';
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
  onBoardingVideo?: boolean;
};

export const ScreenContainer = (props: TProps) => {
  const {
    disableScroll,
    fullscreen,
    children,
    backgroundImage,
    onBoardingVideo,
  } = props;
  return (
    <View style={[styles.wrapper]}>
      {!!onBoardingVideo && (
        <Video
          source={require('../../../assets/onboarding_video.mp4')} // Can be a URL or a local file.
          resizeMode="cover"
          repeat
          style={styles.backgroundImage}
        />
      )}
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
