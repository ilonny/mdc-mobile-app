import React, { useCallback, useEffect, useState } from 'react';
import { getVehicleMarkList } from '../network';

export const useVehicleMarkList = () => {
  const [vehicleMarkList, setVehicleMarkList] = useState([]);
  const [vehicleMarkListLoading, setVehicleMarkListLoading] = useState(false);

  const getVehicleMarkListReq = useCallback(async () => {
    setVehicleMarkListLoading(true);
    const res = await getVehicleMarkList();
    setVehicleMarkListLoading(false);
    setVehicleMarkList(res);
    return res;
  }, []);

  useEffect(() => {
    getVehicleMarkListReq();
  }, [getVehicleMarkListReq]);

  return { vehicleMarkList, vehicleMarkListLoading, getVehicleMarkListReq };
};
