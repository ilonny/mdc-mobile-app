import { useCallback, useEffect, useState } from 'react';
import { getCarData, getPopularCarList } from '../network';

export const useGetPopularCarList = () => {
  const [popularCarList, setPopularCarList] = useState([]);
  const [popularCarListLoading, setPopularCarListLoading] = useState(false);

  const getPopularCarListReq = useCallback(async () => {
    setPopularCarListLoading(true);
    const res = await getPopularCarList();
    const ids = res?.map(i => i.vehicle_id);
    await getCarData(ids);
    setPopularCarList(res);
    setPopularCarListLoading(false);
    return res;
  }, []);

  useEffect(() => {
    getPopularCarListReq();
  }, [getPopularCarListReq]);

  return { popularCarList, popularCarListLoading, getPopularCarListReq };
};
