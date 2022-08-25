import { useCallback, useEffect, useState } from 'react';
import { getCarData, getStockCarList } from '../network';

export const useGetStockCarList = () => {
  const [stockCarList, setStockCarList] = useState([]);
  const [stockCarListLoading, setStockCarListLoading] = useState(false);

  const getStockCarListReq = useCallback(async () => {
    setStockCarListLoading(true);
    const res = await getStockCarList();
    const ids = res?.map(i => i.vehicle_id);
    const dataArr = await getCarData(ids);
    setStockCarList(dataArr);
    setStockCarListLoading(false);
    return dataArr;
  }, []);

  useEffect(() => {
    getStockCarListReq();
  }, [getStockCarListReq]);

  return { stockCarList, stockCarListLoading, getStockCarListReq };
};
