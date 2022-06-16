import { request } from '../../httpClient';
import { GET_VEHICLE_TYPE_LIST_PATH } from '../constants';

export const getVehicleTypeList = async () => {
  const res = await request({
    path: GET_VEHICLE_TYPE_LIST_PATH,
  });
  return res?.data;
};
