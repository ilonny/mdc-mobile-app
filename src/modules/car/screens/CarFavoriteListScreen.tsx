import React from 'react';
import { translate } from '../../translation';
import { Indent, ScreenContainer, Typography } from '../../ui';
import { CardList } from '../components';
import { useCarFavoriteList } from '../hooks';

export const CarFavoriteListScreen = () => {
  const { carFavoriteList, carFavoriteListLoading } = useCarFavoriteList();
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
