import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { Button, Indent, Typography } from '../../../ui';
import { ImageSource, ImageView } from '../../../ui/ImageView';
import { completeOnboarding } from '../../helpers';
import { styles } from './styles';

export const StoriesFourth = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View>
          <Typography.BoldText textAlign="center" fontSize={32}>
            {translate('onboarding4Title')}
          </Typography.BoldText>
          <Indent height={22} />
          <Typography.BoldText
            textAlign="center"
            fontSize={20}
            color={colors.secondaryText}>
            {translate('onboarding4Description')}
          </Typography.BoldText>
          <Indent height={50} />
        </View>
        <View style={styles.bottomImageWrapper}>
          <ImageView
            style={styles.onboarding_hearts}
            source={ImageSource.onboarding_hearts}
            resizeMode="contain"
          />
          <Indent height={30} />
          <View style={styles.perkWrapper}>
            <Typography.BoldText>
              {translate('onboardingPerk1')}
            </Typography.BoldText>
          </View>
          <Indent height={5} />
          <View
            style={[
              styles.perkWrapper,
              { backgroundColor: 'rgba(38,42,51, 0.7)' },
            ]}>
            <Typography.BoldText>
              {translate('onboardingPerk2')}
            </Typography.BoldText>
          </View>
          <Indent height={5} />
          <View
            style={[
              styles.perkWrapper,
              { backgroundColor: 'rgba(38,42,51, 0.5)' },
            ]}>
            <Typography.BoldText>
              {translate('onboardingPerk3')}
            </Typography.BoldText>
          </View>
          <Indent height={5} />
          <View
            style={[
              styles.perkWrapper,
              { backgroundColor: 'rgba(38,42,51, 0.25)' },
            ]}>
            <Typography.BoldText>
              {translate('onboardingPerk4')}
            </Typography.BoldText>
          </View>
        </View>
        <Indent height={30} />
      </View>
      <Indent height={40} />
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          // backgroundColor: 'red',
          width: '100%',
          // left: 16,
          paddingHorizontal: 16,
        }}>
        <Button isWhite onPress={completeOnboarding}>
          <Typography.ButtonText color={colors.totalBlack}>
            {translate('next')}
          </Typography.ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};
