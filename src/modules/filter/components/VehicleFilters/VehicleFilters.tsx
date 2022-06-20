import React, { useCallback, useContext, useMemo } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { translate } from '../../../translation';
import {
  FilterButton,
  Indent,
  Row,
  Select,
  TouchableFeedback,
} from '../../../ui';
import { useVehicleMarkList } from '../../../vehicleMark/hooks';
import { FilterContext } from '../../context';

export const VehicleFilters = () => {
  const { mark, markId, setMark, setMarkId } = useContext(FilterContext);
  const { vehicleMarkList, vehicleMarkListLoading } = useVehicleMarkList();

  const markOptions = useMemo(() => {
    return (
      vehicleMarkList
        ?.map((mark: { label: string; id: number }) => {
          const val = mark.label;
          return {
            value: val,
            label: val,
            extraData: mark.id.toString(),
          };
        })
        .concat({ label: translate('allMarks'), value: '', extraData: '' }) ||
      []
    );
  }, [vehicleMarkList]);

  const onChangeMark = useCallback((val: string, extraId?: any) => {
    setMark(val);
    setMarkId(extraId);
  }, []);

  if (vehicleMarkListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <ScrollView horizontal>
      <Row>
        <Select options={markOptions} onChange={onChangeMark}>
          <FilterButton isActive={!!mark}>
            {translate('filterMark')}
          </FilterButton>
        </Select>
        <Indent width={10} />
        <TouchableFeedback>
          <FilterButton>{translate('filterPower')}</FilterButton>
        </TouchableFeedback>
        <Indent width={10} />
        <TouchableFeedback>
          <FilterButton>{translate('filterPrice')}</FilterButton>
        </TouchableFeedback>
        <Indent width={10} />
        <TouchableFeedback>
          <FilterButton>{translate('filterColor')}</FilterButton>
        </TouchableFeedback>
      </Row>
    </ScrollView>
  );
};
