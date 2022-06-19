import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
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
  const onPressAll = useCallback(() => {
    navigation.navigate('CarListScreen');
  }, [navigation]);

  return (
    <ScreenContainer fullscreen noPadding>
      <Row paddingHorizontal={16}>
        <Typography.ScreenTitle>{translate('autoPark')}</Typography.ScreenTitle>
      </Row>
      <Indent height={20} />
      <PromoBanner />
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
      <PopularList />
      <Indent height={80} />
    </ScreenContainer>
  );
};
