import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import { Button, Indent, Row, ScreenContainer, Typography } from '../../ui';
import { ImageSource, ImageView } from '../../ui/ImageView';
import { OnboardingPush } from '../components';
import { styles } from './styles';

export const OnboardingPushScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressOk = useCallback(() => {
    navigation.navigate('OnboardingStoriesScreen');
  }, [navigation]);

  return (
    <ScreenContainer disableScroll fullscreen>
      <OnboardingPush />
    </ScreenContainer>
  );
};
