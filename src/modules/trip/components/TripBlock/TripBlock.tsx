import moment from 'moment';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { BONUS_EARN_RATE } from '../../../bonus/constants';
import { printPrice } from '../../../car/helpers';
import { translate } from '../../../translation';
import {
  Badge,
  Divider,
  Indent,
  Panel,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { TTrip } from '../../types';
import { styles } from './styles';

type TProps = {
  tripData: TTrip;
};

export const TripBlock = (props: TProps) => {
  const { tripData } = props;

  const poinstsNumber = useMemo(() => {
    if (tripData?.price && tripData?.price !== 'null') {
      return Number(tripData?.price) * BONUS_EARN_RATE;
    }
    return 0;
  }, [tripData?.price]);

  const pricePayed = useMemo(() => {
    if (tripData?.price_payed !== 'null' && tripData?.price !== 'null') {
      if (Number(tripData?.price_payed) >= Number(tripData?.price)) {
        return true;
      }
      return false;
    }
    return false;
  }, [tripData?.price, tripData?.price_payed]);

  console.log('TripBlock', tripData);
  return (
    <TouchableFeedback style={styles.wrapper}>
      <Panel>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText color={colors.secondaryGray}>
            {translate('trip')} #{tripData.id.toString()}
          </Typography.BoldText>
          <Badge>
            {poinstsNumber.toString()} {translate('points')}
          </Badge>
        </Row>
      </Panel>
      <Indent height={10} />
      <Divider margin={0} />
      <Indent height={10} />
      <Panel>
        <Typography.BoldText fontSize={16}>
          {tripData?.vehicle_title || ''}
        </Typography.BoldText>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {moment(tripData.date_start).format('MM.DD.YY')} →{' '}
            {moment(tripData.date_end).format('MM.DD.YY')}
          </Typography.BoldText>
          <Typography.BoldText fontSize={16}>
            {printPrice(tripData?.price || '')}
          </Typography.BoldText>
        </Row>
      </Panel>
      <Indent height={16} />
      <View
        style={[styles.bottomBlock, pricePayed && styles.bottomBlockSuccess]}>
        <Typography.BoldText
          fontSize={16}
          color={pricePayed ? colors.success : '#fff'}>
          {translate(pricePayed ? 'tripIsPayed' : 'tripNotPayed')}
        </Typography.BoldText>
      </View>
    </TouchableFeedback>
  );
};
