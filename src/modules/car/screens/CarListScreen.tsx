import React, { useContext, useMemo } from 'react';
import { VehicleFilters, VehicleTypeFilter } from '../../filter/components';
import { FilterContext } from '../../filter/context';
import { Indent, ScreenContainer, Typography } from '../../ui';
import { CardList } from '../components';
import { filterCarList } from '../helpers';
import { useCarList } from '../hooks';

export const CarListScreen = () => {
  const { vehicleTypeId, markId } = useContext(FilterContext);
  const { carList, carListLoading } = useCarList();
  
  const carListFiltered = useMemo(() => {
    return filterCarList(carList, {
      vehicleTypeId,
      markId,
    });
  }, [carList, vehicleTypeId, markId]);
  
  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      isLoading={carListLoading}>
      <VehicleTypeFilter />
      <Indent height={15} />
      <VehicleFilters />
      <Indent height={30} />
      <CardList items={carListFiltered} />
    </ScreenContainer>
  );
};
