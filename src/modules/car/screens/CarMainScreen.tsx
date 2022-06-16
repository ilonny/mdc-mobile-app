import React from 'react';
import { translate } from '../../translation';
import {
  Indent,
  PromoBanner,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';

export const CarMainScreen = () => {
  return (
    <ScreenContainer fullscreen noPadding>
      <Row paddingHorizontal={16}>
        <Typography.ScreenTitle>{translate('autoPark')}</Typography.ScreenTitle>
      </Row>
      <Indent height={20} />
      <PromoBanner />
      <Indent height={20} />
    </ScreenContainer>
  );
};
