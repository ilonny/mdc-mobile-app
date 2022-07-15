import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Indent } from '../../../ui';
import { TTrip } from '../../types';
import { TripBlock } from '../TripBlock';

type TProps = {
  data: TTrip[];
  onRefresh: () => void;
  refreshing: boolean;
};

export const TripList = (props: TProps) => {
  const { data, onRefresh, refreshing } = props;

  const renderItem = useCallback(({ item }: { item: TTrip }) => {
    return <TripBlock tripData={item} />;
  }, []);

  const keyExtractor = useCallback((item: TTrip) => {
    return item.id.toString();
  }, []);

  const separator = useCallback(() => {
    return <Indent height={20} />;
  }, []);

  return (
    <FlatList
      ItemSeparatorComponent={separator}
      onRefresh={onRefresh}
      refreshing={refreshing}
      nestedScrollEnabled
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
