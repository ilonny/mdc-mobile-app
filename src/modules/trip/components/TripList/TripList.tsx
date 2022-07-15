import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Typography } from '../../../ui';
import { TTrip } from '../../types';

type TProps = {
  data: TTrip[];
  onRefresh: () => void;
  refreshing: boolean;
};

export const TripList = (props: TProps) => {
  const { data, onRefresh, refreshing } = props;

  const renderItem = useCallback(({ item }: { item: TTrip }) => {
    return (
      <View>
        <Typography.MainText>Item {item.id.toString()}</Typography.MainText>
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item: TTrip) => {
    return item.id.toString();
  }, []);

  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      nestedScrollEnabled
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
