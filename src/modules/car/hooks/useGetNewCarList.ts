import { useCallback, useEffect, useState } from 'react';
import { getCarData, getNewCarList } from '../network';

export const useGetNewCarList = () => {
  const [newCarList, setNewCarList] = useState([]);
  const [newCarListLoading, setNewCarListLoading] = useState(false);

  const getNewCarListReq = useCallback(async () => {
    setNewCarListLoading(true);
    const res = await getNewCarList();
    const ids = res?.map(i => i.vehicle_id);
    const dataArr = await getCarData(ids);
    setNewCarList(dataArr);
    setNewCarListLoading(false);
    return dataArr;
  }, []);

  useEffect(() => {
    getNewCarListReq();
  }, [getNewCarListReq]);

  return { newCarList, newCarListLoading, getNewCarListReq };
};
