import { useCallback, useState, useEffect } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getCarData, getCarList } from '../network';
import { TCar } from '../types';

export const useCarList = () => {
  const [carList, setCarList] = useState<TCar[]>([]);
  const [carListLoading, setCarListLoading] = useState<boolean>(false);

  const getCarListReq = useCallback(async () => {
    setCarListLoading(true);
    const res = await getCarList();
    if (Array.isArray(res)) {
      const ids = res.map(car => car.id);
      const dataArr = await getCarData(ids);
      //@ts-ignore
      setCarList(dataArr);
      setCarListLoading(false);
      return dataArr;
    } else {
      setCarList([]);
      return [];
    }
  }, []);

  useEffect(() => {
    getCarListReq();
  }, [getCarListReq]);

  return { carList, carListLoading, getCarListReq };
};
