import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { Indent, Row, Typography } from '../../../ui';
import { printPrice } from '../../helpers';
import { TTariff } from '../../types';
import { styles } from './styles';

type TProps = {
  tariffs: TTariff[];
};

const checkNull = (s: string) => (s === 'null' ? '' : s);

export const CarTariffs = (props: TProps) => {
  const { tariffs } = props;
  if (!tariffs.length) {
    return <></>;
  }
  return (
    <View>
      <Row justifyContent="space-between" alignItems="flex-end">
        <Typography.ScreenTitle>CarTariffs</Typography.ScreenTitle>
        <View style={styles.perDayWrapper}>
          <Typography.BoldText color={colors.secondaryText}>
            {translate('tariffsPerDay')}
          </Typography.BoldText>
        </View>
      </Row>
      <Indent height={10} />
      {tariffs.map((tariff, index) => {
        const str_1 = `${tariff.min_days}-${tariff.max_days}`;
        return (
          <View
            key={tariff.id}
            style={[styles.row, index !== 0 && styles.rowBorder]}>
            <Row justifyContent="space-between">
              <Typography.MainText>
                {str_1
                  .replace('-null', '')
                  .replace('null-', '')
                  .replace('null', '')}{' '}
                {translate('days')}
              </Typography.MainText>
              <Typography.MainText>{`${
                printPrice(tariff?.promo_price || '') ||
                printPrice(tariff.price)
              }`}</Typography.MainText>
            </Row>
          </View>
        );
      })}
    </View>
  );
};
