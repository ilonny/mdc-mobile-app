import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { NavigationProps } from '../../../navigation/types';
import { translate } from '../../translation';
import { Indent, ScreenContainer, Tabs, Typography } from '../../ui';
import { useTripList } from '../hooks';

export const TripMainScreen = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { tripList, tripListLoading, getTripListReq } = useTripList();
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTripListReq();
    });
    return unsubscribe;
  }, [navigation]);

  console.log('tripList', tripList);

  return (
    <ScreenContainer fullscreen isLoading={tripListLoading}>
      <Indent height={40} />
      <Typography.ScreenTitle>{translate('MyTrips')}</Typography.ScreenTitle>
      <Indent height={20} />
      <Tabs
        activeIndex={activeTabIndex}
        tabs={[translate('tripsFuture'), translate('tripsPast')]}
        onChange={setActiveTabIndex}
      />
    </ScreenContainer>
  );
};
