import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import {
  Button,
  Indent,
  PhoneInput,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { ImageSource, ImageView } from '../../ui/ImageView';
import { useGetVerificationCode } from '../hooks';
import { styles } from './styles';

export const AuthScreen = () => {
  const [phone, setPhone] = useState<string>('');
  const { requestCodeResult, requestConfirmationCode, requestCodeLoading } =
    useGetVerificationCode();

  return (
    <ScreenContainer
      isLoading={requestCodeLoading}
      footer={
        <Button
          isWhite
          disabled={phone?.length < 5 ? true : false}
          onPress={() => requestConfirmationCode(phone)}>
          <Typography.ButtonText color={colors.totalBlack}>
            {translate('send')}
          </Typography.ButtonText>
        </Button>
      }>
      <Row column alignItems="center" flex={1}>
        <Indent height={30} />
        <ImageView source={ImageSource.logo} style={styles.logo} />
        <Indent height={50} />
        <Typography.BoldText textAlign="center" fontSize={32}>
          {translate('enterPhone')}
        </Typography.BoldText>
        <Indent height={15} />
        <Typography.BoldText textAlign="center" fontSize={17}>
          {translate('enterPhoneDescription')}
        </Typography.BoldText>
        <Indent height={30} />
        <PhoneInput onChange={setPhone} />
      </Row>
    </ScreenContainer>
  );
};
