import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import { Button, Indent, Row, ScreenContainer, Typography } from '../../ui';
import { ImageSource, ImageView } from '../../ui/ImageView';
import { styles } from './styles';

export const OnboardingMainScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressOk = useCallback(() => {
    navigation.navigate('OnboardingStoriesScreen');
  }, [navigation]);

  return (
    <ScreenContainer
      fullscreen
      disableScroll
      backgroundImage="onboarding_gradient_mask"
      onBoardingVideo>
      <Row column justifyContent="space-between" alignItems="center" flex={1}>
        <View>
          <Indent height={30} />
          <ImageView source={ImageSource.logo} style={styles.logo} />
        </View>
        <View>
          <Typography.ScreenTitle textAlign="center">
            {translate('onboardingMainTitle')}
          </Typography.ScreenTitle>
          <Indent height={20} />
          <Typography.BoldText textAlign="center" fontSize={17} lineHeight={24}>
            {translate('onboardingMainDescription')}
          </Typography.BoldText>
          <Indent height={160} />
        </View>

        <View style={styles.fullWidth}>
          <Button isWhite onPress={onPressOk}>
            <Typography.ButtonText color={colors.totalBlack}>
              {translate('onboardingMainButtonOk')}
            </Typography.ButtonText>
          </Button>
          <Button>
            <Typography.ButtonText>
              {translate('onboardingMainButtonSkip')}
            </Typography.ButtonText>
          </Button>
        </View>
      </Row>
    </ScreenContainer>
  );
};
