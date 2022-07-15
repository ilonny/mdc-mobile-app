import React, { useMemo, useState } from 'react';
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
import { TripAgreementPanel } from '../components';

export const TripDetailsScreen = () => {
  const route = useRoute<RootRouteProps<'TripDetailsScreen'>>();
  const tripData = route.params.tripData;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const pricePayed = useMemo(() => {
    if (tripData?.price_payed !== 'null' && tripData?.price !== 'null') {
      if (Number(tripData?.price_payed) >= Number(tripData?.price)) {
        return true;
      }
      return false;
    }
    return false;
  }, [tripData?.price, tripData?.price_payed]);

  console.log('tripData', tripData);

  return (
    <ScreenContainer headerProps={{ backButton: true }}>
      <Typography.ScreenTitle small>
        {tripData?.vehicle_title || ''}
      </Typography.ScreenTitle>
      <Indent height={20} />
      <Tabs
        activeIndex={activeTabIndex}
        tabs={[translate('tripDetails'), translate('notifications')]}
        onChange={setActiveTabIndex}
      />
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
          tripData?.vehicle_delivery !== 'null' && !!tripData?.vehicle_delivery
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
      <Indent height={40} />
    </ScreenContainer>
  );
};
