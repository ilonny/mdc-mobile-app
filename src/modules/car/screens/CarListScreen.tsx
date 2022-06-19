import React from 'react';
import { VehicleTypeFilter } from '../../filter/components';
import { ScreenContainer, Typography } from '../../ui';

export const CarListScreen = () => {
  return (
    <ScreenContainer headerProps={{ backButton: true }}>
      <VehicleTypeFilter />
    </ScreenContainer>
  );
};
