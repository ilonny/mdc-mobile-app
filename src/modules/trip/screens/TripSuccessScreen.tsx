import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback } from 'react';
import { reset } from '../../../navigation';
import { NavigationProps, RootRouteProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { BonusPanel } from '../../bonus/components';
import { CarBookingDeposit } from '../../car/components';
import { printPrice } from '../../car/helpers';
import { BOOKING_DEPOSIT_AMOUNT } from '../../core/constants';
import { translate } from '../../translation';
import {
  Button,
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Panel,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { useUserData } from '../../user/hooks';

export const TripSuccessScreen = () => {
  const route = useRoute<RootRouteProps<'TripSuccessScreen'>>();
  const navigation = useNavigation<NavigationProps>();
  const { data } = route.params;
  const { userData } = useUserData(true);

  const onPressMyTrips = useCallback(() => {
    //@ts-ignore
    navigation.navigate(translate('MyTrips'));
  }, [navigation]);

  return (
    <ScreenContainer fullscreen>
      <Indent height={40} />
      <Row justifyContent="center">
        <ImageView source={ImageSource.success_circle} size={80} />
      </Row>
      <Indent height={20} />
      <Typography.ScreenTitle textAlign="center">
        {translate('bookedSuccessfully')}
      </Typography.ScreenTitle>
      <Indent height={50} />
      {userData?.deposit_balance ? (
        <>
          <Row justifyContent="space-between">
            <Typography.MainText fontSize={16}>
              {translate('currentBalance')}
            </Typography.MainText>
            <Typography.MainText fontSize={16}>
              {printPrice(userData?.deposit_balance || '0')}
            </Typography.MainText>
          </Row>
          <Divider margin={20} />
        </>
      ) : (
        <></>
      )}
      {/* <Row justifyContent="space-between">
        <Typography.MainText fontSize={16}>
          {translate('returnPeriod')}
        </Typography.MainText>
        <Typography.MainText fontSize={16}>
        {translate('returnPeriod')}
        </Typography.MainText>
      </Row> */}
      <Typography.BoldText fontSize={20}>
        {translate('tripDetails')}
      </Typography.BoldText>
      <Indent height={20} />
      <Row justifyContent="space-between">
        <Typography.MainText fontSize={16}>
          {translate('tripDates')}
        </Typography.MainText>
        <Typography.MainText fontSize={16}>
          {data.date_start} → {data.date_end}
        </Typography.MainText>
      </Row>
      {data.price ? (
        <>
          <Divider margin={20} />
          <Row justifyContent="space-between">
            <Typography.MainText fontSize={16}>
              {translate('rentCost')}
            </Typography.MainText>
            <Typography.MainText fontSize={16}>
              {printPrice(data.price)}
            </Typography.MainText>
          </Row>
        </>
      ) : (
        <></>
      )}
      <Divider margin={20} />
      <Row justifyContent="space-between">
        <Typography.MainText fontSize={16}>
          {translate('insuranceDepositCost')}
        </Typography.MainText>
        <Typography.MainText fontSize={16}>
          {printPrice(data?.insurance_deposit)}
        </Typography.MainText>
      </Row>
      <Indent height={50} />
      <Panel fullWidth>
        <Indent height={10} />
        <Button isWhite onPress={onPressMyTrips}>
          <Typography.BoldText color={colors.totalBlack}>
            {translate('MyTrips')}
          </Typography.BoldText>
        </Button>
        <Indent height={30} />
      </Panel>
      <Indent height={30} />
      <BonusPanel price={data.price} />
    </ScreenContainer>
  );
};
