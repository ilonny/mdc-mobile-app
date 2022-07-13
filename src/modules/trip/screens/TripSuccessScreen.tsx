import { useRoute } from '@react-navigation/native';
import React from 'react';
import { RootRouteProps } from '../../../navigation/types';
import { CarBookingDeposit } from '../../car/components';
import { BOOKING_DEPOSIT_AMOUNT } from '../../core/constants';
import { translate } from '../../translation';
import {
  ImageSource,
  ImageView,
  Indent,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { TripCreateForm } from '../components';

export const TripSuccessScreen = () => {
  const route = useRoute<RootRouteProps<'TripSuccessScreen'>>();
  const { data } = route.params;
  console.log('data', data);
  return (
    <ScreenContainer fullscreen>
      <Indent height={40} />
      <Row justifyContent="center">
        <ImageView source={ImageSource.success_circle} size={80} />
      </Row>
      <Indent height={20} />
      <Typography.ScreenTitle textAlign="center">
        {translate('bookedSuccessfully')}
      </Typography.ScreenTitle>
    </ScreenContainer>
  );
};
