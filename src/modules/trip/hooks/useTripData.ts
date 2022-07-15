import { useState, useCallback, useEffect } from 'react';
import { getTripData } from '../network';
import { TTrip } from '../types';

export const useTripData = () => {
  const [tripDataHook, setTripData] = useState<TTrip>({});
  const [tripDataLoading, setTripDataLoading] = useState(false);

  const getTripDataReq = useCallback(async (id: string) => {
    setTripDataLoading(true);
    let res = await getTripData(id);
    setTripDataLoading(false);
    setTripData(res);
    return res;
  }, []);

  return { tripDataHook, tripDataLoading, getTripDataReq };
};
