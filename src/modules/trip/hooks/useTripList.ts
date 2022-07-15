import { useState, useCallback, useEffect } from 'react';
import { getTripList } from '../network';
import { TTrip } from '../types';

export const useTripList = () => {
  const [tripList, setTripList] = useState<Array<TTrip>>([]);
  const [tripListLoading, setTripListLoading] = useState(false);

  const getTripListReq = useCallback(async () => {
    setTripListLoading(true);
    let res = await getTripList();
    res = res?.filter(t => t.status !== 'DELETED');
    setTripListLoading(false);
    setTripList(res);
    return res;
  }, []);

  useEffect(() => {
    getTripListReq();
  }, [getTripListReq]);

  return { tripList, tripListLoading, getTripListReq };
};
