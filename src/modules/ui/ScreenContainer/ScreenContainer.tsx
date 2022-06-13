import React from 'react';
import Video from 'react-native-video';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ImageView, ImageSource } from '../ImageView';
import { TImageSource } from '../ImageView/ImageSource';
import { styles } from './styles';
import { ScreenFooter } from './ScreenFooter';
import { FullScreenLoader } from '../FullScreenLoader';

type TProps = {
  disableScroll?: boolean;
  fullscreen?: boolean;
  children: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
  backgroundImage?: TImageSource;
  onBoardingVideo?: boolean;
  footerPadding?: boolean;
  isLoading?: boolean;
};

export const ScreenContainer = (props: TProps) => {
  const {
    isLoading,
    disableScroll,
    fullscreen,
    children,
    backgroundImage,
    onBoardingVideo,
    footer,
    footerPadding,
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
      <View style={styles.areaWrapper}>
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
        {footer && (
          <SafeAreaView>
            <ScreenFooter
              // isWhite={isWhite}
              // isBlue={isBlue}
              footerPadding={footerPadding}>
              {footer}
            </ScreenFooter>
          </SafeAreaView>
        )}
      </View>
      {isLoading && (
        <View style={StyleSheet.absoluteFill}>
          <FullScreenLoader />
        </View>
      )}
    </View>
  );
};
