import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import { Indent, Row, Typography } from '../../../ui';
import { useGetStockCarList } from '../../hooks';
import { CardList } from '../CardList';

export const StockList = () => {
  const { stockCarList, stockCarListLoading } = useGetStockCarList();
  if (stockCarListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }
  if (stockCarList?.length) {
    return (
      <View>
        <Row paddingHorizontal={16}>
          <Typography.ScreenTitle>
            {translate('stockListTitle')}
          </Typography.ScreenTitle>
        </Row>
        <Indent height={20} />
        <CardList items={stockCarList} allSmall />
      </View>
    );
  }
  return <></>;
};
