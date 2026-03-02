import React, { useCallback, useEffect, useState } from 'react';
import { getVehicleTypeList } from '../network';
import { TVehicleType } from '../types';

export const useVehicleTypeList = () => {
  const [vehicleTypeList, setVehicleTypeList] = useState<TVehicleType[]>([]);
  const [vehicleTypeListLoading, setVehicleTypeListLoading] = useState(false);

  const getVehicleTypeListReq = useCallback(async () => {
    setVehicleTypeListLoading(true);
    const res = await getVehicleTypeList();
    setVehicleTypeListLoading(false);
    setVehicleTypeList(res);
    console.log('res?', res)
    return res;
  }, []);

  useEffect(() => {
    getVehicleTypeListReq();
  }, [getVehicleTypeListReq]);

  return { vehicleTypeList, vehicleTypeListLoading, getVehicleTypeListReq };
};
