import { useCallback, useState, useEffect } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getCarData, getCarFavoriteList } from '../network';
import { TCar } from '../types';

export const useCarFavoriteList = () => {
  const [carFavoriteList, setCarFavoriteList] = useState<TCar[]>([]);
  const [carFavoriteListLoading, setCarFavoriteListLoading] =
    useState<boolean>(false);

  const getCarFavoriteListReq = useCallback(async () => {
    setCarFavoriteListLoading(true);
    const res = await getCarFavoriteList();
    console.log('res', res);
    if (Array.isArray(res)) {
      const ids = res?.map(r => r.vehicle_id);
      const dataArr = await getCarData(ids);
      //@ts-ignore
      setCarFavoriteList(dataArr);
      setCarFavoriteListLoading(false);
      return dataArr;
    } else {
      setCarFavoriteList([]);
      return [];
    }
  }, []);

  useEffect(() => {
    getCarFavoriteListReq();
  }, [getCarFavoriteListReq]);

  return { carFavoriteList, carFavoriteListLoading, getCarFavoriteListReq };
};
