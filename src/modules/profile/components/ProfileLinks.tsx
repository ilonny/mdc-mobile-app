import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { NavigationProps } from '../../../navigation/types';
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

  return (
    <>
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
      <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('ProfileSettings')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
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
      <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('OfferAgreement')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
      <TouchableFeedback>
        <Indent height={10} />
        <Row justifyContent="space-between">
          <Typography.BoldText fontSize={16}>
            {translate('AboutApp')}
          </Typography.BoldText>
          <ImageView size={20} source={ImageSource.chevron_forward} />
        </Row>
        <Indent height={10} />
      </TouchableFeedback>
      <Divider margin={10} />
    </>
  );
};
