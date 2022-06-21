import { request } from '../../httpClient';
import { GET_VEHICLE_COLOR_LIST_PATH } from '../constants';

export const getVehicleColorList = async () => {
  const res = await request({
    path: GET_VEHICLE_COLOR_LIST_PATH,
  });
  return res?.data;
};
