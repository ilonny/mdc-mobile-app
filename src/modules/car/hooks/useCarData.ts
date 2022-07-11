import { getCarData } from './../network';
import { useState, useCallback, useEffect } from 'react';
import { TCar } from '../types';
export const useCarData = (id: string) => {
  const [carData, setCarData] = useState<null | TCar>(null);
  const [carDataLoading, setCarDataLoading] = useState<boolean>(false);

  const getCarDataReq = useCallback(
    async (vehicle_id: string) => {
      setCarDataLoading(true);
      let res = await getCarData([vehicle_id]);
      setCarDataLoading(false);
      if (res[0]) {
        setCarData(res[0]);
        return res[0];
      }
      return res;
    },
    [id],
  );

  useEffect(() => {
    getCarDataReq(id);
  }, [getCarDataReq, id]);

  return { carData, carDataLoading, getCarDataReq };
};
