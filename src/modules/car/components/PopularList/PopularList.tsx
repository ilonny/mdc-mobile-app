import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import { Indent, Row, Typography } from '../../../ui';
import { useGetPopularCarList } from '../../hooks';
import { CardList } from '../CardList';

export const PopularList = () => {
  const { popularCarList, popularCarListLoading } = useGetPopularCarList();
  console.log('popularCarList', popularCarList);
  if (popularCarListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }
  if (popularCarList?.length) {
    return (
      <View>
        <Row paddingHorizontal={16}>
          <Typography.ScreenTitle>
            {translate('popularListTitle')}
          </Typography.ScreenTitle>
        </Row>
        <Indent height={20} />
        <CardList items={popularCarList} />
      </View>
    );
  }
  return <></>;
};
