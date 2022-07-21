import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import {
  Button,
  Divider,
  Indent,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { Panel } from '../../../ui/Panel';
import { Row } from '../../../ui/Row';
import { useAchievmentList, usePromoStatusList } from '../../hooks';
import { styles } from './styles';

type TProps = {
  userId: string;
  bonusValue: string | null;
};

export const ProfileBonusPanel = (props: TProps) => {
  const { userId, bonusValue } = props;
  const { promoStatusListLoading, userPromoStatus, nextStatus } =
    usePromoStatusList(userId, Number(bonusValue) || 0);

  const { achievmentList, achievmentListLoading, availableCount } =
    useAchievmentList(bonusValue || '');

  if (promoStatusListLoading || achievmentListLoading) {
    return (
      <>
        <Indent height={20} />
        <Row justifyContent="center">
          <ActivityIndicator />
        </Row>
        <Indent height={20} />
      </>
    );
  }
  if (userPromoStatus) {
    return (
      <TouchableFeedback>
        <Panel>
          <Typography.BoldText fontSize={14} color={colors.secondaryGray}>
            {translate('yourStatus')}
          </Typography.BoldText>
          <Indent height={10} />
          <Typography.BoldText fontSize={20}>
            {userPromoStatus?.title || ''}
          </Typography.BoldText>
          {!!nextStatus ? (
            <>
              <Indent height={20} />
              <Typography.MainText fontSize={14}>
                {translate('nextLevelText1')}
                {nextStatus?.title || ' '}
                {translate('nextLevelText2')}{' '}
                {(
                  Number(nextStatus?.bonus_cost || 0) - Number(bonusValue || 0)
                ).toString()}
              </Typography.MainText>
              <Indent height={20} />
              <View style={styles.bonusLineWrapper}>
                <View style={styles.bonusLine} />
                <View
                  style={[
                    styles.bonusLineActive,
                    {
                      width:
                        (Number(bonusValue || 0) /
                          Number(nextStatus?.bonus_cost || 0)) *
                          100 +
                        '%',
                    },
                  ]}
                />
              </View>
              <Indent height={5} />
              <Row justifyContent="space-between">
                <Typography.BoldText color={colors.secondaryGray}>
                  {Number(bonusValue || 0).toString()}
                </Typography.BoldText>
                <Typography.BoldText color={colors.secondaryGray}>
                  {Number(nextStatus?.bonus_cost || 0).toString()}
                </Typography.BoldText>
              </Row>
            </>
          ) : (
            <></>
          )}
          <>
            <Divider margin={30} />
            <Typography.BoldText fontSize={14} color={colors.secondaryGray}>
              {translate('Available')}
            </Typography.BoldText>
            <Indent height={10} />
            <Typography.BoldText fontSize={20}>
              {availableCount.toString()} {translate('achievments')}
            </Typography.BoldText>
            <Indent height={20} />
            <Text>
              <Button smallHeight border>
                <Typography.MainText fontSize={14}>
                  {translate('showAllachievments')}
                </Typography.MainText>
              </Button>
            </Text>
          </>
        </Panel>
      </TouchableFeedback>
    );
  }
  return <></>;
};
