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
import { THeaderProps } from '../ScreenHeader/ScreenHeader';
import { ScreenHeader } from '../ScreenHeader';

type TProps = {
  disableScroll?: boolean;
  fullscreen?: boolean;
  children: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
  backgroundImage?: TImageSource;
  onBoardingVideo?: boolean;
  footerPadding?: boolean;
  isLoading?: boolean;
  noPadding?: boolean;
  headerProps?: THeaderProps;
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
    noPadding,
    headerProps,
  } = props;
  return (
    <View style={[styles.wrapper]}>
      {!!onBoardingVideo && (
        <Video
          muted
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
                  noPadding && styles.scrollContentNoPadding,
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
                noPadding && styles.scrollContentNoPadding,
              ]}>
              {children}
            </ScrollView>
          )}
        </KeyboardAvoidingView>
        {!!headerProps && (
          <View
            style={[styles.headerWrapper, ]}>
            <SafeAreaView style={styles.headerWrapperContent}>
              <View style={styles.headerWrapperContentRow}>
                <ScreenHeader
                  {...headerProps}
                  // titleOpacity={titleOpacity}
                  // isBlue={isBlue}
                />
              </View>
            </SafeAreaView>
          </View>
        )}
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
