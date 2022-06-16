import React from 'react';
import { translate } from '../../translation';
import {
  Indent,
  PromoBanner,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { VehicleTypeList } from '../../vehicleType/components';

export const CarMainScreen = () => {
  return (
    <ScreenContainer fullscreen noPadding>
      <Row paddingHorizontal={16}>
        <Typography.ScreenTitle>{translate('autoPark')}</Typography.ScreenTitle>
      </Row>
      <Indent height={20} />
      <PromoBanner />
      <Indent height={20} />
      <VehicleTypeList />
      <Indent height={20} />
      <Indent height={80} />
    </ScreenContainer>
  );
};
