import React, { useCallback, useEffect, useState } from 'react';
import { getVehicleColorList } from '../network';

export const useVehicleColorList = () => {
  const [vehicleColorList, setVehicleColorList] = useState([]);
  const [vehicleColorListLoading, setVehicleColorListLoading] = useState(false);

  const getVehicleColorListReq = useCallback(async () => {
    setVehicleColorListLoading(true);
    const res = await getVehicleColorList();
    setVehicleColorListLoading(false);
    setVehicleColorList(res);
    return res;
  }, []);

  useEffect(() => {
    getVehicleColorListReq();
  }, [getVehicleColorListReq]);

  return { vehicleColorList, vehicleColorListLoading, getVehicleColorListReq };
};
