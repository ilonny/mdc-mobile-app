import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  ImageSource,
  ImageView,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { mapData } from '../../constants';
import { useVehicleTypeList } from '../../hooks';
import { TVehicleType } from '../../types';
import { styles } from './styles';

export const VehicleTypeList = () => {
  const { vehicleTypeList, vehicleTypeListLoading } = useVehicleTypeList();

  if (vehicleTypeListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <Row flexWrap="wrap" marginHorizontal={-2.5}>
      {vehicleTypeList?.map((type: TVehicleType) => {
        return (
          <TouchableFeedback style={styles.itemWrap}>
            <View style={styles.itemWrapInner}>
              <View style={styles.iconWrap}>
                <ImageView
                  style={styles.icon}
                  source={ImageSource[mapData[type.label].icon]}
                />
              </View>
              <Typography.BoldText>
                {mapData[type.label].label}
              </Typography.BoldText>
            </View>
          </TouchableFeedback>
        );
      })}
    </Row>
  );
};
