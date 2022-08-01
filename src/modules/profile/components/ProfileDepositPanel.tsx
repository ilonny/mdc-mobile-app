import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { colors } from '../../../theme';
import { printPrice } from '../../car/helpers';
import { BOOKING_DEPOSIT_AMOUNT } from '../../core/constants';
import { PaymentDepositModal } from '../../payment/components';
import { translate } from '../../translation';
import { Button, Divider, Indent, Panel, Row, Typography } from '../../ui';

type TProps = {
  deposit: number | string;
};

export const ProfileDepositPanel = (props: TProps) => {
  const { deposit } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [payModalIsVisible, setPayModalIsVisible] = useState(false);

  const onPressTopUp = useCallback(() => {
    const d = Number(deposit) || 0;
    if (d >= BOOKING_DEPOSIT_AMOUNT) {
      Alert.alert('You have already enough deposit');
    } else {
      setPayModalIsVisible(true);
    }
  }, [deposit, setPayModalIsVisible]);

  return (
    <Panel>
      <Typography.BoldText fontSize={14} color={colors.secondaryGray}>
        {translate('yourDeposit')}
      </Typography.BoldText>
      <Indent height={10} />
      <Typography.BoldText fontSize={20}>
        {printPrice(deposit?.toString()) || ''}
      </Typography.BoldText>
      <Indent height={15} />
      <Row justifyContent="flex-start" alignItems="center">
        <View style={{ width: 150 }}>
          <Text>
            <Button smallHeight border onPress={onPressTopUp}>
              <Typography.MainText fontSize={14}>
                {translate('topUp')}
              </Typography.MainText>
            </Button>
          </Text>
        </View>
        {/* <Indent width={30} /> */}
        <View style={{ width: 50 }}>
          <Text>
            <Button
              smallHeight
              isTransparent
              onPress={() => setCollapsed(!collapsed)}>
              <Typography.BoldText fontSize={14} color={colors.secondaryGray}>
                {collapsed ? translate('more') : translate('closeModal')}
              </Typography.BoldText>
            </Button>
          </Text>
        </View>
      </Row>
      {!collapsed ? (
        <>
          <Divider margin={20} />
          {!deposit || deposit == '0' ? (
            <>
              <Typography.BoldText>
                {translate('depositPanelZero')}
              </Typography.BoldText>
              <Indent height={10} />
            </>
          ) : (
            <></>
          )}
          <Typography.MainText color={colors.secondaryText}>
            {translate('depositPanelDesc')}
          </Typography.MainText>
        </>
      ) : (
        <></>
      )}
      <PaymentDepositModal
        isVisible={payModalIsVisible}
        setIsVisible={setPayModalIsVisible}
        justTopUp
        tripData={{}}
      />
    </Panel>
  );
};
