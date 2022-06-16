import React, { useCallback, useEffect, useState } from 'react';
import { getVehicleTypeList } from '../network';

export const useVehicleTypeList = () => {
  const [vehicleTypeList, setVehicleTypeList] = useState([]);
  const [vehicleTypeListLoading, setVehicleTypeListLoading] = useState(false);

  const getVehicleTypeListReq = useCallback(async () => {
    setVehicleTypeListLoading(true);
    const res = await getVehicleTypeList();
    setVehicleTypeListLoading(false);
    setVehicleTypeList(res);
    return res;
  }, []);

  useEffect(() => {
    getVehicleTypeListReq();
  }, [getVehicleTypeListReq]);

  return { vehicleTypeList, vehicleTypeListLoading, getVehicleTypeListReq };
};
