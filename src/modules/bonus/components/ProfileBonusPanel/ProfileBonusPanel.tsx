import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationProps } from '../../../../navigation/types';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { Button, Divider, ImageView, Indent, Typography } from '../../../ui';
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
  const navigation = useNavigation<NavigationProps>();

  const onPressAchievmentBtn = useCallback(() => {
    navigation.navigate('AchievmentListScreen');
  }, [navigation]);

  const { promoStatusListLoading, userPromoStatus, nextStatus } =
    usePromoStatusList(userId, Number(bonusValue) || 0);

  const { achievmentListLoading, availableCount } = useAchievmentList();

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

  console.log('userPromoStatus', userPromoStatus);

  console.log('nextStatus', nextStatus, bonusValue);
  if (userPromoStatus) {
    return (
      <Panel>
        <Row justifyContent="space-between">
          <View>
            <Typography.BoldText fontSize={14} color={colors.secondaryGray}>
              {translate('yourStatus')}
            </Typography.BoldText>
            <Indent height={10} />
            <Typography.BoldText fontSize={20}>
              {userPromoStatus?.title || ''}
            </Typography.BoldText>
          </View>
          {userPromoStatus.image ? (
            <ImageView href size={47} source={userPromoStatus.image} />
          ) : (
            <></>
          )}
        </Row>
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
            {availableCount.toString()} {translate('rewards')}
          </Typography.BoldText>
          <Indent height={20} />
          <Text>
            <Button smallHeight border onPress={onPressAchievmentBtn}>
              <Typography.MainText fontSize={14}>
                {translate('showAllRewards')}
              </Typography.MainText>
            </Button>
          </Text>
        </>
      </Panel>
    );
  }
  return <></>;
};
