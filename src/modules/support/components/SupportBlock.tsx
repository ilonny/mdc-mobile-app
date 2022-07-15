import React from 'react';
import { View } from 'react-native';
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

export const SupportBlock = () => {
  return (
    <View>
      <Typography.BoldText fontSize={20}>
        {translate('haveQ')}
      </Typography.BoldText>
      <Indent height={20} />
      <Button isWhite>
        <Typography.BoldText color={colors.totalBlack}>
          {translate('writeInChat')}
        </Typography.BoldText>
      </Button>
      <Indent height={20} />
      <Button border>
        <Row flex={1} justifyContent="space-between" paddingHorizontal={16}>
          <Typography.BoldText>{translate('writeInWA')}</Typography.BoldText>
          <ImageView size={27} source={ImageSource.whatsapp} />
        </Row>
      </Button>
      <Indent height={20} />
      <Button border>
        <Row flex={1} justifyContent="space-between" paddingHorizontal={16}>
          <Typography.BoldText>{translate('writeInTG')}</Typography.BoldText>
          <ImageView size={27} source={ImageSource.telegram} />
        </Row>
      </Button>
      <Indent height={20} />
      <TouchableFeedback>
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
