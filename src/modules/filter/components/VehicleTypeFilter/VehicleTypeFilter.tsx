import React, { useCallback, useContext, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import {
  ImageSource,
  ImageView,
  Indent,
  Row,
  Select,
  Typography,
} from '../../../ui';
import { mapData } from '../../../vehicleType/constants';
import { useVehicleTypeList } from '../../../vehicleType/hooks';
import { FilterContext } from '../../context';

export const VehicleTypeFilter = () => {
  const { vehicleType, setVehicleType, vehicleTypeId, setVehicleTypeId } =
    useContext(FilterContext);
  const { vehicleTypeList, vehicleTypeListLoading } = useVehicleTypeList();

  const label = useMemo(() => {
    if (!vehicleType) {
      return translate('allCars');
    }
    return vehicleType || '';
  }, [vehicleType]);

  const options = useMemo(() => {
    return (
      vehicleTypeList
        ?.map((type: { label: string; id: number }) => {
          const val = mapData[type.label].label;
          return {
            value: val,
            label: val,
            extraData: type.id.toString(),
          };
        })
        .concat({ label: translate('allCars'), value: '', extraData: '' }) || []
    );
  }, [vehicleTypeList]);

  const onChange = useCallback((val: string, extraId?: any) => {
    setVehicleType(val);
    setVehicleTypeId(extraId);
  }, []);

  if (vehicleTypeListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <View>
      <Select options={options} onChange={onChange}>
        <Row>
          <Typography.ScreenTitle>{label}</Typography.ScreenTitle>
          <Indent width={10} />
          <ImageView
            size={30}
            source={ImageSource.chevron_down}
            tintColorProp="#fff"
          />
        </Row>
      </Select>
    </View>
  );
};
