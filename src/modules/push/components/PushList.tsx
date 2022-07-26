import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { Divider, Indent, Typography } from '../../ui';
import { TPush } from '../types';

type TProps = {
  data: TPush[];
};

export const PushList = (props: TProps) => {
  const { data } = props;
  if (!data || data?.length === 0) {
    return (
      <Typography.BoldText fontSize={22}>
        No push notifications
      </Typography.BoldText>
    );
  }
  return (
    <>
      {data?.map((push, index) => {
        return (
          <View>
            {index !== 0 ? <Divider margin={20} /> : <></>}
            <Typography.MainText color={colors.secondaryGray} fontSize={14}>
              {moment(push.createdAt).format('MM/DD/YYYY')}
            </Typography.MainText>
            <Indent height={10} />
            <Typography.BoldText fontSize={20}>
              {push.title}
            </Typography.BoldText>
            {push?.description ? (
              <>
                <Indent height={10} />
                <Typography.MainText>{push.description}</Typography.MainText>
              </>
            ) : (
              <></>
            )}
          </View>
        );
      })}
    </>
  );
};
