import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { Button, Indent, Row, ScreenContainer, Typography } from '../../ui';
import { ImageSource, ImageView } from '../../ui/ImageView';
import { styles } from './styles';

export const OnboardingMainScreen = () => {
  return (
    <ScreenContainer fullscreen disableScroll backgroundImage="onboarding_bg">
      <Row column justifyContent="space-between" alignItems="center" flex={1}>
        <View>
          <Indent height={30} />
          <ImageView source={ImageSource.logo} style={styles.logo} />
        </View>
        <View>
          <Typography.ScreenTitle textAlign="center">
            Thanks{'\n'}for joining us!
          </Typography.ScreenTitle>
          <Indent height={20} />
          <Typography.BoldText textAlign="center" fontSize={17} lineHeight={24}>
            We will tell you what you will get{'\n'}in this application{'\n'}in
            stories format.
          </Typography.BoldText>
          <Indent height={160} />
        </View>

        <View style={styles.fullWidth}>
          <Button isWhite>
            <Typography.ButtonText color={colors.totalBlack}>
              Start
            </Typography.ButtonText>
          </Button>
          <Button>
            <Typography.ButtonText>Skip</Typography.ButtonText>
          </Button>
        </View>
      </Row>
    </ScreenContainer>
  );
};
