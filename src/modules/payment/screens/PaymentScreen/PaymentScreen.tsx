import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { NavigationProps, RootRouteProps } from '../../../../navigation/types';
import { colors } from '../../../../theme';
import { Storage } from '../../../asyncStorage';
import { request } from '../../../httpClient';
import { Button, Indent, ScreenContainer, Typography } from '../../../ui';

export const PaymentScreen = () => {
  const route = useRoute<RootRouteProps<'PaymentScreen'>>();
  const navigation = useNavigation<NavigationProps>();
  const {
    params: { callback, sumOfDeposit },
  } = route;

  const onSuccessCb = useCallback(async () => {
    callback();
    navigation.goBack();
  }, [callback, navigation]);

  const makePayment = useCallback(async () => {
    const user_id = await Storage.getItem('user_id');

    const res = await request({
      path: `payment/deposit?user_id=${user_id}&amount=${sumOfDeposit}`,
    });
    if (res?.data) {
      onSuccessCb();
    }
  }, [sumOfDeposit, onSuccessCb]);

  return (
    <ScreenContainer headerProps={{ backButton: true }}>
      <Typography.ScreenTitle>Payment Screen</Typography.ScreenTitle>
      <Indent height={15} />
      <Typography.BoldText>
        Here will be a bank card information page, but now, just imaginate it.
      </Typography.BoldText>
      <Indent height={15} />
      <Typography.BoldText>
        Just push the "Pay" button now, and it will increase user's depost
        balance
      </Typography.BoldText>
      <Indent height={30} />
      <Button onPress={makePayment} isWhite>
        <Typography.BoldText color={colors.totalBlack}>Pay</Typography.BoldText>
      </Button>
    </ScreenContainer>
  );
};
