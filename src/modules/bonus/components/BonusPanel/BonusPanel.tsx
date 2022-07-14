import React from 'react';
import { translate } from '../../../translation';
import { Indent, TouchableFeedback, Typography } from '../../../ui';
import { Panel } from '../../../ui/Panel';
import { Row } from '../../../ui/Row';
import { BONUS_EARN_RATE } from '../../constants';

type TProps = {
  price: number;
};

export const BonusPanel = (props: TProps) => {
  const { price } = props;
  return (
    <TouchableFeedback>
      <Panel fullWidth>
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {(price * BONUS_EARN_RATE).toString()} {translate('points')}
          </Typography.BoldText>
          <Typography.BoldText fontSize={14}>
            {translate('whatIsThis')}
          </Typography.BoldText>
        </Row>
        <Indent height={20} />
        <Typography.BoldText fontSize={14}>
          {translate('pointsDesc')}
        </Typography.BoldText>
      </Panel>
    </TouchableFeedback>
  );
};
