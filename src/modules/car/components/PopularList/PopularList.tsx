import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../ui';
import { useGetPopularCarList } from '../../hooks';

export const PopularList = () => {
  const { popularCarList, popularCarListLoading } = useGetPopularCarList();
  return (
    <View>
      <Typography.MainText>PopularList</Typography.MainText>
    </View>
  );
};
