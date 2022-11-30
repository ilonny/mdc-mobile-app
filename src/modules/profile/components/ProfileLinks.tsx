import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { reset } from '../../../navigation';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { Storage } from '../../asyncStorage';
import { usePushList } from '../../push/hooks';
import { translate } from '../../translation';
import {
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../ui';

export const ProfileLinks = () => {
  const { pushList } = usePushList();
  const navigation = useNavigation<NavigationProps>();

  const onPressNotificationsLink = useCallback(() => {
    navigation.navigate('ProfileNotificationsScreen');
  }, [navigation]);

  const onPressFav = useCallback(() => {
    navigation.navigate('CarFavoriteListScreen');
  }, [navigation]);

  return (
    <>
      <Divider margin={10} />
      <TouchableFeedback onPress={onPressFav}>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('favCars')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      <TouchableFeedback onPress={onPressNotificationsLink}>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('notifications')}
          </Typography.BoldText>
          <Typography.BoldText fontSize={16}>
            {pushList?.length?.toString() || '0'}
          </Typography.BoldText>
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      {/* <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('ProfileSettings')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} /> */}
      <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('DataProcessingPolicy')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      {/* <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('OfferAgreement')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} /> */}
      <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('AboutApp')}
          </Typography.BoldText>
          <Typography.BoldText fontSize={16}>1.0</Typography.BoldText>
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      <TouchableFeedback
        onPress={async () => {
          await Storage.clear();
          reset('InitialScreen');
        }}>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16} color={colors.red}>
            {translate('Logout')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      <TouchableFeedback
        onPress={async () => {
          Alert.alert(
            translate('DeleteAccountTextConfirm'),
            translate('DeleteAccountText'),
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: async () => {
                  await Storage.clear();
                  reset('InitialScreen');
                },
              },
            ],
          );
        }}>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16} color={colors.red}>
            {translate('DeleteAccount')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
    </>
  );
};
