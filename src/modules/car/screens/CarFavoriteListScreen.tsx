import React, { useContext, useMemo } from 'react';
import { VehicleFilters, VehicleTypeFilter } from '../../filter/components';
import { FilterContext } from '../../filter/context';
import { translate } from '../../translation';
import { Indent, ScreenContainer, Typography } from '../../ui';
import { CardList } from '../components';
import { filterCarList } from '../helpers';
import { useCarFavoriteList, useCarList } from '../hooks';

export const CarFavoriteListScreen = () => {
  const { carFavoriteList, carFavoriteListLoading } = useCarFavoriteList();
  console.log('carFavoriteList', carFavoriteList);
  console.log('carFavoriteListLoading', carFavoriteListLoading);
  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      isLoading={carFavoriteListLoading}>
      <Typography.ScreenTitle>{translate('favCars')}</Typography.ScreenTitle>
      <Indent height={15} />
      <Indent height={15} />
      <CardList items={carFavoriteList} />
    </ScreenContainer>
  );
};
