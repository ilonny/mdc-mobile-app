import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationProps } from '../../../../navigation/types';
import { FilterContext } from '../../../filter/context';
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
  const navigation = useNavigation<NavigationProps>();
  const { setVehicleType, setVehicleTypeId } = useContext(FilterContext);
  const { vehicleTypeList, vehicleTypeListLoading } = useVehicleTypeList();

  const onPressType = useCallback(
    (type: TVehicleType) => {
      const val = mapData[type.label].label;
      setVehicleType(val);
      setVehicleTypeId(type.id.toString());
      navigation.navigate('CarListScreen');
    },
    [navigation],
  );

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
        // console.log('type', type);
        return (
          <TouchableFeedback
            style={styles.itemWrap}
            key={type.id}
            onPress={() => onPressType(type)}>
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
