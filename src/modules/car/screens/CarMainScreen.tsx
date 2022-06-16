import React from 'react';
import { translate } from '../../translation';
import { ScreenContainer, Typography } from '../../ui';

export const CarMainScreen = () => {
  return (
    <ScreenContainer fullscreen>
      <Typography.ScreenTitle>{translate('autoPark')}</Typography.ScreenTitle>
    </ScreenContainer>
  );
};
