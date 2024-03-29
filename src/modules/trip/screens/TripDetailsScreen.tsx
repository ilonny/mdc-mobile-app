import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-native-modal';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { RootRouteProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { BonusPanel } from '../../bonus/components';
import { CarOptions } from '../../car/components';
import { printPrice } from '../../car/helpers';
import { SupportBlock } from '../../support/components';
import { translate } from '../../translation';
import {
  CheckBox,
  Divider,
  Indent,
  Panel,
  Row,
  ScreenContainer,
  Tabs,
  Typography,
} from '../../ui';
import { styles } from './styles';
import { TripAgreementPanel, TripCancelButton } from '../components';
import { useTripData } from '../hooks';
import moment from 'moment';
import { TPush } from '../../push/types';
import { request } from '../../httpClient';
import { PushList } from '../../push/components';
import { mapTripStatus } from '../helpers';

export const TripDetailsScreen = () => {
  const route = useRoute<RootRouteProps<'TripDetailsScreen'>>();
  const tripDataParam = route.params.tripData;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [pushList, setPushList] = useState<TPush[]>([]);
  const [pushListLoading, setPushListLoading] = useState(false);

  const { tripDataHook, tripDataLoading, getTripDataReq } = useTripData();

  const tripData = useMemo(() => {
    return { ...tripDataParam, ...tripDataHook };
  }, [tripDataParam, tripDataHook]);

  const pricePayed = useMemo(() => {
    if (tripData?.price_payed !== 'null' && tripData?.price !== 'null') {
      if (Number(tripData?.price_payed) >= Number(tripData?.price)) {
        return true;
      }
      return false;
    }
    return false;
  }, [tripData?.price, tripData?.price_payed]);

  const dayStartDiff = useMemo(() => {
    const today = moment();
    const mStart = moment(tripData?.date_start);

    const res = Math.abs(mStart.diff(today, 'days'));
    return res;
  }, [tripData]);

  useEffect(() => {
    setPushListLoading(true);
    getTripDataReq(tripData.id.toString());
    request({
      path: `push/list?trip_id=${tripData.id.toString()}`,
    })
      .then(res => {
        setPushList(res?.data?.reverse());
      })
      .finally(() => setPushListLoading(false));
  }, []);

  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      onRefresh={() => getTripDataReq(tripData.id.toString())}
      refreshing={tripDataLoading}
      isLoading={pushListLoading}>
      <Typography.ScreenTitle small>
        {tripData?.vehicle_title || ''}
      </Typography.ScreenTitle>
      <Indent height={20} />
      <Tabs
        activeIndex={activeTabIndex}
        tabs={[translate('tripDetails'), translate('notifications')]}
        onChange={setActiveTabIndex}
      />
      {activeTabIndex === 0 ? (
        <>
          {tripData?.status === 'CANCELED' ? (
            <>
              <Indent height={40} />
              <Panel isRed>
                <Indent height={30} />
                <Typography.BoldText fontSize={20} textAlign="center">
                  {translate('tripWasCanceled')}
                </Typography.BoldText>
                {/* <Indent height={10} />
            <Typography.BoldText fontSize={18} textAlign="center">
              {translate('tripWasCanceledText')}
            </Typography.BoldText> */}
                <Indent height={30} />
              </Panel>
            </>
          ) : (
            <></>
          )}
          {tripData?.status === 'COMPLETED' ? (
            <>
              <Indent height={40} />
              <Panel isGreen>
                <Indent height={30} />
                <Typography.BoldText
                  fontSize={20}
                  textAlign="center"
                  color={colors.mainGray}>
                  {translate('tripWasCompleted')}
                </Typography.BoldText>
                <Indent height={10} />
                <Typography.MainText
                  fontSize={14}
                  textAlign="center"
                  color={colors.mainGray}>
                  {translate('tripWasCompletedText')}
                </Typography.MainText>
                <Indent height={30} />
              </Panel>
            </>
          ) : (
            <></>
          )}
          <Indent height={40} />
          <Typography.BoldText fontSize={20}>
            {translate('whatNext')}
          </Typography.BoldText>
          <Indent height={20} />
          <Row alignItems="flex-start">
            <View style={styles.textNumRowWrapper}>
              <Typography.BoldText color={colors.secondaryText}>
                1
              </Typography.BoldText>
            </View>
            <Typography.MainText>{translate('whatNext1')}</Typography.MainText>
          </Row>
          <Indent height={20} />
          <Row alignItems="flex-start">
            <View style={styles.textNumRowWrapper}>
              <Typography.BoldText color={colors.secondaryText}>
                2
              </Typography.BoldText>
            </View>
            <Typography.MainText>{translate('whatNext2')}</Typography.MainText>
          </Row>
          <Indent height={20} />
          <Row alignItems="flex-start">
            <View style={styles.textNumRowWrapper}>
              <Typography.BoldText color={colors.secondaryText}>
                3
              </Typography.BoldText>
            </View>
            <Typography.MainText>{translate('whatNext3')}</Typography.MainText>
          </Row>

          <Indent height={40} />
          {tripData.status === 'CREATED' ? (
            <>
              <TripCancelButton
                disabled={dayStartDiff <= 2}
                id={tripData.id}
                callback={() => getTripDataReq(tripData.id.toString())}
              />
              <Indent height={40} />
            </>
          ) : (
            <></>
          )}
          <Panel fullWidth>
            <Indent height={6} />
            <Row justifyContent="space-between">
              <Typography.BoldText fontSize={20}>
                {translate('rentCost')}
              </Typography.BoldText>
              <Typography.BoldText fontSize={20}>
                {printPrice(tripData?.price || '')}
              </Typography.BoldText>
            </Row>
            <Indent height={10} />
            <Row justifyContent="space-between" alignItems="flex-start">
              <Typography.MainText fontSize={14} color={colors.secondaryText}>
                {translate('tripDetailsCostDesc')}
              </Typography.MainText>
              <Typography.BoldText
                fontSize={14}
                color={pricePayed ? colors.success : colors.red}>
                {translate(pricePayed ? 'paid' : 'notpaid')}
              </Typography.BoldText>
            </Row>
            <Indent height={6} />
          </Panel>
          <Indent height={20} />
          {!!tripData?.status &&
          tripData?.status !== 'undefined' &&
          tripData?.status !== 'null' ? (
            <>
              <Panel fullWidth>
                <Indent height={6} />
                <Row justifyContent="space-between">
                  <Typography.BoldText fontSize={20}>
                    {translate('rentStatus')}
                  </Typography.BoldText>
                  <Typography.BoldText fontSize={20}>
                    {mapTripStatus(tripData?.status || '')}
                  </Typography.BoldText>
                </Row>
                <Indent height={6} />
              </Panel>
            </>
          ) : (
            <></>
          )}
          {tripData?.agreement_link && tripData?.agreement_link !== 'null' ? (
            <>
              <Indent height={20} />
              <TripAgreementPanel link={tripData?.agreement_link} />
            </>
          ) : (
            <></>
          )}
          <Indent height={40} />

          <Typography.BoldText fontSize={20}>
            {translate('tripDetails')}
          </Typography.BoldText>
          <Indent height={20} />
          <Row justifyContent="space-between">
            <Typography.MainText fontSize={16}>
              {translate('tripDates')}
            </Typography.MainText>
            <Typography.MainText fontSize={16}>
              {tripData.date_start} → {tripData.date_end}
            </Typography.MainText>
          </Row>
          <Divider margin={20} />
          <Row justifyContent="space-between">
            <Typography.MainText fontSize={16}>
              {translate('rentCost')}
            </Typography.MainText>
            <Typography.MainText fontSize={16}>
              {printPrice(tripData.price || '')}
            </Typography.MainText>
          </Row>
          <Divider margin={20} />
          <Row justifyContent="space-between">
            <Typography.MainText fontSize={16}>
              {translate('insuranceDepositCost')}
            </Typography.MainText>
            <Typography.MainText fontSize={16}>
              {printPrice(tripData?.insurance_payed || '')}
            </Typography.MainText>
          </Row>

          <Indent height={40} />
          <CarOptions />
          <Indent height={40} />
          <Typography.BoldText fontSize={20}>
            {translate('Additionally')}
          </Typography.BoldText>
          <Indent height={20} />
          <CheckBox
            fullwidth
            disabled
            initialChecked={
              tripData?.additional_drivers !== 'null' &&
              !!tripData?.additional_drivers
            }>
            <Typography.BoldText fontSize={15}>
              {translate('additionalDrivers')}
            </Typography.BoldText>
          </CheckBox>
          <Indent height={20} />
          <CheckBox
            fullwidth
            disabled
            initialChecked={
              tripData?.vehicle_delivery !== 'null' &&
              !!tripData?.vehicle_delivery
            }>
            <Typography.BoldText fontSize={15}>
              {translate('vehicleDelivery')}
            </Typography.BoldText>
          </CheckBox>
          <Indent height={20} />
          <CheckBox
            fullwidth
            disabled
            initialChecked={
              tripData?.additional_mileage !== 'null' &&
              !!tripData?.additional_mileage
            }>
            <Typography.BoldText fontSize={15}>
              {translate('additionalMileage')}
            </Typography.BoldText>
          </CheckBox>
          <Indent height={20} />
          <CheckBox
            fullwidth
            disabled
            initialChecked={tripData?.abroad !== 'null' && !!tripData?.abroad}>
            <Typography.BoldText fontSize={15}>
              {translate('abroad')}
            </Typography.BoldText>
          </CheckBox>
          <Indent height={20} />
          <CheckBox
            fullwidth
            disabled
            initialChecked={
              tripData?.baby_chair !== 'null' && !!tripData?.baby_chair
            }>
            <Typography.BoldText fontSize={15}>
              {translate('babyChair')}
            </Typography.BoldText>
          </CheckBox>
          <Indent height={40} />
          <BonusPanel price={Number(tripData?.price) || 0} />
          <Indent height={40} />
          <SupportBlock />
        </>
      ) : (
        <>
          <Indent height={40} />
          <PushList data={pushList} hideTitle />
        </>
      )}
      <Indent height={40} />
    </ScreenContainer>
  );
};
