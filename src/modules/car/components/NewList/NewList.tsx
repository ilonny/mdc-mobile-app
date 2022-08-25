import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import { Indent, Row, Typography } from '../../../ui';
import { useGetNewCarList } from '../../hooks';
import { CardList } from '../CardList';

export const NewList = () => {
  const { newCarList, newCarListLoading } = useGetNewCarList();
  if (newCarListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }
  if (newCarList?.length) {
    return (
      <View>
        <Row paddingHorizontal={16}>
          <Typography.ScreenTitle>
            {translate('newListTitle')}
          </Typography.ScreenTitle>
        </Row>
        <Indent height={20} />
        <CardList items={newCarList} />
      </View>
    );
  }
  return <></>;
};
