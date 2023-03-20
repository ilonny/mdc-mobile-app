import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Modal from 'react-native-modal';
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Panel,
  Row,
  ScreenHeader,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { styles } from './styles';
import { lang, translate } from '../../../translation';
import { colors } from '../../../../theme';
import { useUserData } from '../../../user/hooks';
import { BOOKING_DEPOSIT_AMOUNT } from '../../../core/constants';
import { printPrice } from '../../../car/helpers';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../../navigation/types';
import { Storage } from '../../../asyncStorage';
import { createTrip } from '../../../trip/network';

type TProps = {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  tripData: Record<any, any>;
  justTopUp?: boolean;
};

export const PaymentDepositModal = (props: TProps) => {
  const { isVisible, setIsVisible, tripData, justTopUp } = props;

  const navigation = useNavigation<NavigationProps>();

  const [loading, setLoading] = useState(false);
  const [returnTime, setReturnTime] = useState(0);

  const { userData, getUserDataReq } = useUserData(true);

  useEffect(() => {
    if (isVisible) {
      getUserDataReq();
    }
  }, [isVisible]);

  const sumOfDeposit = useMemo(() => {
    return BOOKING_DEPOSIT_AMOUNT - Number(userData?.deposit_balance || 0);
  }, [userData?.deposit_balance, BOOKING_DEPOSIT_AMOUNT]);

  const callbackSuccessPayment = useCallback(async () => {
    setIsVisible(true);
    const user_id = await Storage.getItem('user_id');
    await getUserDataReq(user_id || '');
  }, []);

  const onPressPay = useCallback(async () => {
    setIsVisible(false);
    setTimeout(() => {
      console.log('navigate?');
      navigation.navigate('PaymentScreen', {
        callback: callbackSuccessPayment,
        sumOfDeposit,
      });
    }, 10);
  }, [navigation, sumOfDeposit]);

  useEffect(() => {
    //проверим, если баланса депозита не хватает, попросим доплатить, иначе сразу заброним тачку
    const checkWhatToDo = async () => {
      if (isVisible) {
        if (lang === 'ru') {
          setLoading(true);
          //book without payemnt
          const user_id = await Storage.getItem('user_id');
          const data = { ...tripData, returnTime, user_id };
          const createdTrip = await createTrip(data);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setLoading(true);
          if (!!createdTrip) {
            setIsVisible(false);
            navigation.navigate('TripSuccessScreen', { data });
          }
          return false;
        }
        if (sumOfDeposit <= 0) {
          setLoading(true);
          if (justTopUp) {
            setIsVisible(false);
            navigation.navigate('PaymentSuccessScreen');
          } else {
            //book without payemnt
            const user_id = await Storage.getItem('user_id');
            const data = { ...tripData, returnTime, user_id };
            const createdTrip = await createTrip(data);
            setTimeout(() => {
              setLoading(false);
            }, 500);
            if (!!createdTrip) {
              setIsVisible(false);
              navigation.navigate('TripSuccessScreen', { data });
            }
            // console.log('without now', createdTrip);
          }
        } else {
          setLoading(false);
        }
      }
    };
    checkWhatToDo();
  }, [sumOfDeposit, isVisible, tripData, returnTime, navigation]);

  // console.log('userData', userData);
  // console.log('sumOfDeposit', sumOfDeposit, userData?.deposit_balance);
  return (
    <>
      <Modal style={styles.wrapper} isVisible={isVisible}>
        <SafeAreaView>
          <ScreenHeader
            backButton
            onPressBackButton={() => setIsVisible(false)}
          />
          <ScrollView>
            {loading ? (
              <View style={styles.loaderWrapper}>
                <ActivityIndicator />
              </View>
            ) : (
              <>
                <Indent height={20} />
                <Typography.ScreenTitle>
                  {translate('depositFillTitle')}
                </Typography.ScreenTitle>
                <Indent height={20} />
                <Typography.MainText color={colors.secondaryText} fontSize={14}>
                  {translate('depositFillText')}
                </Typography.MainText>
                {/* <Indent height={20} />
                <Typography.BoldText fontSize={16}>
                  {translate('currentDeposit')}{' '}
                  {printPrice(userData?.deposit_balance || '0')}
                </Typography.BoldText> */}
                <Divider margin={20} />
                <Typography.BoldText fontSize={16}>
                  {translate('depositToPay')}
                </Typography.BoldText>
                <Indent height={20} />
                <Panel>
                  <Indent height={10} />
                  <Row justifyContent="center">
                    <Typography.BoldText fontSize={18}>
                      {printPrice(sumOfDeposit.toString())}
                    </Typography.BoldText>
                  </Row>
                  <Indent height={10} />
                </Panel>
                <Divider margin={20} />
                <Typography.BoldText fontSize={16}>
                  {translate('depositToPayTime')}
                </Typography.BoldText>
                <Indent height={10} />
                <TouchableFeedback onPress={() => setReturnTime(0)}>
                  <View
                    style={[
                      styles.touchablePanel,
                      returnTime === 0 && styles.touchablePanelActive,
                    ]}>
                    <Panel>
                      <Row alignItems="center" justifyContent="space-between">
                        <Typography.MainText>
                          {translate('after4Weeks')}
                        </Typography.MainText>
                        <Typography.MainText
                          textAlign="right"
                          fontSize={14}
                          color={colors.secondaryText}>
                          {translate('after4WeeksText')}
                        </Typography.MainText>
                      </Row>
                    </Panel>
                  </View>
                </TouchableFeedback>
                <Indent height={10} />
                <TouchableFeedback onPress={() => setReturnTime(1)}>
                  <View
                    style={[
                      styles.touchablePanel,
                      returnTime === 1 && styles.touchablePanelActive,
                    ]}>
                    <Panel>
                      <Row alignItems="center" justifyContent="space-between">
                        <Typography.BoldText fontSize={16}>
                          {translate('after4WeeksInf')}
                        </Typography.BoldText>
                        <Typography.MainText
                          textAlign="right"
                          fontSize={14}
                          color={colors.secondaryText}>
                          {translate('after4WeeksInfText')}
                        </Typography.MainText>
                      </Row>
                    </Panel>
                  </View>
                </TouchableFeedback>
                <Divider margin={20} />
                <TouchableFeedback
                  onPress={() => Linking.openURL('https://google.com')}>
                  <Row justifyContent="space-between">
                    <Typography.BoldText
                      fontSize={16}
                      color={colors.secondaryText}>
                      {translate('bankConditionsBtn')}
                    </Typography.BoldText>
                    <ImageView
                      size={20}
                      source={ImageSource.chevron_forward}
                      tintColorProp={colors.secondaryText}
                    />
                  </Row>
                </TouchableFeedback>
                <Divider margin={20} />
                <Indent height={20} />
                <Button isWhite onPress={onPressPay}>
                  <Row
                    justifyContent="space-between"
                    flex={1}
                    paddingHorizontal={16}>
                    <Typography.ButtonText color={colors.totalBlack}>
                      {translate('depositPayBtn')}
                    </Typography.ButtonText>
                    <ImageView
                      source={ImageSource.visa}
                      style={styles.visaIcon}
                    />
                  </Row>
                </Button>
                <Indent height={50} />
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};
