import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { Indent, Panel, Row, Typography } from '../../../ui';
import { printPrice } from '../../helpers';

type TProps = {
  amount: string;
};

export const CarBookingDeposit = (props: TProps) => {
  const { amount } = props;
  return (
    <Panel fullWidth>
      <Row justifyContent="space-between">
        <Typography.BoldText fontSize={17}>
          {translate('BookingTitle')}
        </Typography.BoldText>
        <Typography.BoldText fontSize={17}>
          {translate('around')} {printPrice(amount || '0')}
        </Typography.BoldText>
      </Row>
      <Indent height={5} />
      <Typography.BoldText fontSize={15} color={colors.secondaryText}>
        {translate('Returns')}
      </Typography.BoldText>
      <Indent height={15} />
      <Typography.MainText fontSize={15} color={colors.secondaryText}>
        {translate('bookingDepositText')}
      </Typography.MainText>
    </Panel>
  );
};
