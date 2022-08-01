import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { NavigationProps } from '../../../../navigation/types';
import { colors } from '../../../../theme';
import { BonusPanel } from '../../../bonus/components';
import { printPrice } from '../../../car/helpers';
import { translate } from '../../../translation';
import {
  Button,
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Panel,
  Row,
  ScreenContainer,
  Typography,
} from '../../../ui';

export const PaymentSuccessScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressMyTrips = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScreenContainer fullscreen>
      <Indent height={40} />
      <Row justifyContent="center">
        <ImageView source={ImageSource.success_circle} size={80} />
      </Row>
      <Indent height={20} />
      <Typography.ScreenTitle textAlign="center">
        {translate('payedSuccessfully')}
      </Typography.ScreenTitle>
      <Indent height={50} />
      <Indent height={50} />
      <Panel fullWidth>
        <Indent height={10} />
        <Button isWhite onPress={onPressMyTrips}>
          <Typography.BoldText color={colors.totalBlack}>
            {translate('next')}
          </Typography.BoldText>
        </Button>
        <Indent height={30} />
      </Panel>
      <Indent height={30} />
    </ScreenContainer>
  );
};
