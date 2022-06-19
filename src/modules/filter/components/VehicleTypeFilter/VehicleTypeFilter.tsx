import React, { useContext, useMemo } from 'react';
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
  const { vehicleType, setVehicleType } = useContext(FilterContext);
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
        ?.map((type: { label: string }) => {
          const val = mapData[type.label].label;
          return {
            value: val,
            label: val,
          };
        })
        .concat({ label: translate('allCars'), value: '' }) || []
    );
  }, [vehicleTypeList]);

  if (vehicleTypeListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <View>
      <Select options={options} onChange={setVehicleType}>
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
