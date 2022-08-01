import React, { useMemo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { ImageView, Indent, Row, Typography } from '../../../ui';
import { ImageSource, TImageSource } from '../../../ui/ImageView/ImageSource';

type TProps = {
  status: string | null;
};

export const UserSecurityStatus = (props: TProps) => {
  const { status } = props;

  const statusConfirmed = useMemo(() => {
    return Boolean(status && status !== 'null');
  }, [status]);

  const color = useMemo(() => {
    if (statusConfirmed) {
      return colors.lightGreen;
    }
    return colors.lightYellow;
  }, [statusConfirmed]);

  const text = useMemo(() => {
    if (statusConfirmed) {
      return translate('secutiryCheckStatusOk');
    }
    return translate('secutiryCheckStatusNotOk');
  }, [statusConfirmed]);

  const icon: TImageSource = useMemo(() => {
    if (statusConfirmed) {
      return 'checkcircle';
    }
    return 'arrowscounterclockwise';
  }, [statusConfirmed]);

  return (
    <Row justifyContent="space-between">
      <Row>
        <ImageView source={ImageSource[icon]} size={16} tintColorProp={color} />
        <Indent width={10} />
        <Typography.BoldText color={color}>{text}</Typography.BoldText>
      </Row>
      {statusConfirmed ? (
        <></>
      ) : (
        <Typography.BoldText color={colors.secondaryGray}>
          {translate('around1Hour')}
        </Typography.BoldText>
      )}
    </Row>
  );
};
