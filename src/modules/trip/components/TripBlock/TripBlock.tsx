import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../../navigation/types';
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
  const navigation = useNavigation<NavigationProps>();
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

  const onPressBlock = useCallback(() => {
    navigation.navigate('TripDetailsScreen', { tripData });
  }, []);

  return (
    <TouchableFeedback style={styles.wrapper} onPress={onPressBlock}>
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
            {moment(tripData.date_start).format('DD.MM.YY')} →{' '}
            {moment(tripData.date_end).format('DD.MM.YY')}
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
