import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { FilterContext } from '../../filter/context';
import { PromoblockSwiper } from '../../promoblock/components';
import { translate } from '../../translation';
import {
  Button,
  Indent,
  PromoBanner,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { VehicleTypeList } from '../../vehicleType/components';
import { PopularList } from '../components';

export const CarMainScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { setVehicleType, setVehicleTypeId } = useContext(FilterContext);
  const onPressAll = useCallback(() => {
    setVehicleType(undefined);
    setVehicleTypeId(undefined);
    navigation.navigate('CarListScreen');
  }, [navigation]);

  return (
    <ScreenContainer fullscreen noPadding>
      <Indent height={40} />
      <Row paddingHorizontal={16}>
        <Typography.ScreenTitle>{translate('autoPark')}</Typography.ScreenTitle>
      </Row>
      <Indent height={20} />
      <PromoblockSwiper />
      <Indent height={20} />
      <VehicleTypeList />
      <Indent height={20} />
      <View style={{ paddingHorizontal: 16 }}>
        <Button isWhite onPress={onPressAll}>
          <Typography.ButtonText color={colors.totalBlack}>
            {translate('allCars')}
          </Typography.ButtonText>
        </Button>
      </View>
      <Indent height={20} />
      <View style={{ paddingHorizontal: 16 }}>
        <PopularList />
      </View>
      <Indent height={80} />
    </ScreenContainer>
  );
};
