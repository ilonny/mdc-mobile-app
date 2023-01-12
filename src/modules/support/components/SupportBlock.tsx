import React, { useContext } from 'react';
import { View, Linking } from 'react-native';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import {
  Button,
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../ui';
import { SupportContext } from '../context';

export const SupportBlock = () => {
  const { setChatModalVisible } = useContext(SupportContext);
  return (
    <View>
      <Typography.BoldText fontSize={20}>
        {translate('haveQ')}
      </Typography.BoldText>
      <Indent height={20} />
      <Button isWhite onPress={() => setChatModalVisible(true)}>
        <Typography.BoldText color={colors.totalBlack}>
          {translate('writeInChat')}
        </Typography.BoldText>
      </Button>
      <Indent height={20} />
      <Button
        border
        onPress={() => Linking.openURL('whatsapp://send?phone=+971585489080')}>
        <Row flex={1} justifyContent="space-between" paddingHorizontal={16}>
          <Typography.BoldText>{translate('writeInWA')}</Typography.BoldText>
          <ImageView size={27} source={ImageSource.whatsapp} />
        </Row>
      </Button>
      <Indent height={20} />
      <Button
        border
        onPress={() => Linking.openURL('http://t.me/+971585489080')}>
        <Row flex={1} justifyContent="space-between" paddingHorizontal={16}>
          <Typography.BoldText>{translate('writeInTG')}</Typography.BoldText>
          <ImageView size={27} source={ImageSource.telegram} />
        </Row>
      </Button>
      <Indent height={20} />
      <TouchableFeedback onPress={() => Linking.openURL('tel:+971585489080')}>
        <Row justifyContent="center">
          <ImageView size={200} source={ImageSource.sos} />
        </Row>
        <Row justifyContent="center">
          <Typography.BoldText color={colors.secondaryGray}>
            {translate('tapToSos')}
          </Typography.BoldText>
          <Indent width={5} />
          <ImageView size={16} source={ImageSource.phonecall} />
        </Row>
      </TouchableFeedback>
    </View>
  );
};
