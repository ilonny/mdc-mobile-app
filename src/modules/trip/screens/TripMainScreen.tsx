import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationProps } from '../../../navigation/types';
import { translate } from '../../translation';
import { Indent, Row, ScreenContainer, Tabs, Typography } from '../../ui';
import { TripList } from '../components';
import { getFutureTrips, getPastTrips } from '../helpers';
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

  const futureTrips = useMemo(() => {
    return getFutureTrips(tripList);
  }, [tripList]);

  const pastTrips = useMemo(() => {
    return getPastTrips(tripList);
  }, [tripList]);

  return (
    <ScreenContainer fullscreen isLoading={tripListLoading} disableScroll>
      <Indent height={40} />
      <Typography.ScreenTitle>{translate('MyTrips')}</Typography.ScreenTitle>
      <Indent height={20} />
      {tripList?.length ? (
        <>
          <Row>
            <Tabs
              activeIndex={activeTabIndex}
              tabs={[translate('tripsFuture'), translate('tripsPast')]}
              onChange={setActiveTabIndex}
            />
          </Row>
          <Indent height={20} />
          <TripList
            data={activeTabIndex === 0 ? futureTrips : pastTrips}
            onRefresh={getTripListReq}
            refreshing={tripListLoading}
          />
        </>
      ) : (
        <>
          <Typography.BoldText>
            {translate('tripListEmpty')}
          </Typography.BoldText>
        </>
      )}
    </ScreenContainer>
  );
};
