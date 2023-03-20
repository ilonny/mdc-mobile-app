import React, { useCallback, useEffect, useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Linking, Text, View } from 'react-native';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import {
  Button,
  Indent,
  PhoneInput,
  Row,
  ScreenContainer,
  TouchableFeedback,
  Typography,
} from '../../ui';
import { ImageSource, ImageView } from '../../ui/ImageView';
import {
  useAuthWithCall,
  useAuthWithCode,
  useGetVerificationCode,
} from '../hooks';
import { styles } from './styles';

const CELL_COUNT = 4;
let interval: any;

export const AuthScreen = () => {
  const [phone, setPhone] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { requestCodeResult, requestConfirmationCode, requestCodeLoading } =
    useGetVerificationCode();
  const { authResult, authLoading, authWithCodeReq } = useAuthWithCode();
  const { number, request_id, getNumber, checkStatus } = useAuthWithCall();
  const [secondsToResend, setSecondsToResend] = useState(59);

  useEffect(() => {
    if (!!requestCodeResult) {
      //@ts-ignore
      clearInterval(interval);
      interval = setInterval(() => {
        setSecondsToResend(i => (i === 0 ? 0 : i - 1));
      }, 1000);
    }
  }, [requestCodeResult]);

  const requestCode = useCallback(() => {
    setSecondsToResend(59);
    requestConfirmationCode(phone);
  }, [phone, requestConfirmationCode]);

  useEffect(() => {
    if (value?.length >= CELL_COUNT) {
      authWithCodeReq(phone, value);
    }
  }, [value, phone, authWithCodeReq]);

  useEffect(() => {
    if (secondsToResend === 0) {
      console.log('request phone');
      getNumber(phone);
    }
  }, [secondsToResend, phone]);

  console.log('number', number);
  console.log('request_id', request_id);

  return (
    <ScreenContainer
      isLoading={requestCodeLoading || authLoading}
      footer={
        !!requestCodeResult ? (
          <></>
        ) : (
          <Button
            isWhite
            disabled={phone?.length < 5 ? true : false}
            onPress={requestCode}>
            <Typography.ButtonText color={colors.totalBlack}>
              {translate('send')}
            </Typography.ButtonText>
          </Button>
        )
      }>
      <Row column alignItems="center" flex={1}>
        <Indent height={30} />
        <ImageView source={ImageSource.logo} style={styles.logo} />
        <Indent height={50} />
        <Typography.BoldText textAlign="center" fontSize={17}>
          {!!requestCodeResult
            ? translate('enterCode')
            : translate('enterPhone')}
        </Typography.BoldText>
        <Indent height={15} />
        {!!requestCodeResult ? (
          <>
            <CodeField
              autoFocus
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol ? (
                    <Text>{symbol}</Text>
                  ) : (
                    <Text style={{ color: '#262A33' }}>0</Text>
                  )}
                </Text>
              )}
            />
          </>
        ) : (
          <>
            <Typography.BoldText textAlign="center" fontSize={17}>
              {translate('enterPhoneDescription')}
            </Typography.BoldText>
            <Indent height={30} />
            <PhoneInput onChange={setPhone} />
            <Indent height={30} />
            <Typography.BoldText textAlign="center" fontSize={17}>
              На этот номер будет осуществлен автоматический звонок с кодом
              подтверждения
            </Typography.BoldText>
            <Indent height={60} />
          </>
        )}
        {!!requestCodeResult ? (
          <View>
            <Indent height={30} />
            <Typography.BoldText
              color={'rgba(255,255,255, 0.4)'}
              textAlign="center">
              {/* @ts-ignore */}
              {secondsToResend > 0 ? (
                <>
                  {translate('resendCodeTime1')} {secondsToResend}{' '}
                  {translate('resendCodeTime2')}
                </>
              ) : (
                <Text>{` `}</Text>
              )}
            </Typography.BoldText>
            <Indent height={10} />
            <TouchableFeedback
              onPress={() => secondsToResend <= 0 && requestCode()}>
              <Typography.BoldText textAlign="center" textDecorationLine='underline'>
                {translate('resendCode')}
              </Typography.BoldText>
            </TouchableFeedback>

            {secondsToResend <= 0 ? (
              <>
                <Indent height={20} />
                <Typography.BoldText textAlign="center">
                  Или, позвоните по номеру, чтобы авторизоваться
                </Typography.BoldText>
                <Indent height={20} />
                <TouchableFeedback
                  onPress={() => Linking.openURL(`tel:${number}`)}>
                  <Typography.BoldText textAlign="center" fontSize={20} textDecorationLine='underline'>
                    {number}
                  </Typography.BoldText>
                </TouchableFeedback>
                <Indent height={20} />
                <Button
                  isWhite
                  disabled={phone?.length < 5 ? true : false}
                  onPress={() => checkStatus(phone, request_id)}>
                  <Typography.ButtonText color={colors.totalBlack}>
                    Я позвонил, авторизоваться
                  </Typography.ButtonText>
                </Button>
              </>
            ) : (
              <></>
            )}
          </View>
        ) : (
          <></>
        )}
      </Row>
    </ScreenContainer>
  );
};
