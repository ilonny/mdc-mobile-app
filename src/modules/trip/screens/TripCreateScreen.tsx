import { useRoute } from '@react-navigation/native';
import React from 'react';
import { RootRouteProps } from '../../../navigation/types';
import { CarBookingDeposit } from '../../car/components';
import { translate } from '../../translation';
import { Indent, ScreenContainer, Typography } from '../../ui';

export const TripCreateScreen = () => {
  const route = useRoute<RootRouteProps<'TripCreateScreen'>>();
  const { vehicle_id, title } = route.params;
  return (
    <ScreenContainer headerProps={{ backButton: true, title }}>
      <Typography.ScreenTitle>
        {translate('BookingTitle')}
      </Typography.ScreenTitle>
      <Indent height={30} />
      <CarBookingDeposit amount={'1000'} />
    </ScreenContainer>
  );
};
