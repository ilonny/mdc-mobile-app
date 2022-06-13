import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { colors } from '../../../../theme';
import { requestUserPermission } from '../../../push';
import { translate } from '../../../translation';
import { Button, Indent, Typography } from '../../../ui';
import { ImageSource, ImageView } from '../../../ui/ImageView';
import { completeOnboarding, completeOnboardingPush } from '../../helpers';
import { styles } from './styles';

export const OnboardingPush = () => {
  const onRequestPush = useCallback(async () => {
    await requestUserPermission();
    completeOnboardingPush();
  }, []);

  const onSkipPush = useCallback(async () => {
    completeOnboardingPush();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View>
          <Typography.BoldText textAlign="center" fontSize={22}>
            {translate('onboardingPushTitle')}
          </Typography.BoldText>
          <Indent height={20} />
          <Typography.BoldText
            textAlign="center"
            fontSize={18}
            color={colors.secondaryText}>
            {translate('onboardingPushDescription')}
          </Typography.BoldText>
          <Indent height={50} />
        </View>
        <View style={styles.bottomImageWrapper}>
          <ImageView
            style={styles.onboarding_push}
            source={ImageSource.onboarding_push}
            resizeMode="contain"
          />
          <Indent height={30} />
        </View>
        <View>
          <Button isWhite onPress={onRequestPush}>
            <Typography.ButtonText color={colors.totalBlack}>
              {translate('pushAllowBtn')}
            </Typography.ButtonText>
          </Button>
          <Button onPress={onSkipPush}>
            <Typography.ButtonText>{translate('notNow')}</Typography.ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
