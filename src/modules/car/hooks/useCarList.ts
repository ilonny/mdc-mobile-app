import { chunk, delay } from 'lodash';
import { useCallback, useState, useEffect } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getCarData, getCarList } from '../network';
import { TCar } from '../types';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const useCarList = () => {
  const [carList, setCarList] = useState<TCar[]>([]);
  const [carListLoading, setCarListLoading] = useState<boolean>(false);

  const getCarListReq = useCallback(async () => {
    setCarListLoading(true);
    const res = await getCarList();
    if (Array.isArray(res)) {
      const ids = res.map(car => car.id);
      const chunks = chunk(ids, 5);
      for (let i = 0; i < chunks.length; i++) {
        const chunkArr = chunks[i];
        if (!chunkArr?.length) return carList;
        const dataArr = await getCarData(chunkArr);
        //@ts-ignore
        setCarList(d => d.concat(dataArr));
        setCarListLoading(false);
      }
      return carList;
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
