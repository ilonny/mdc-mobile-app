import { request } from '../../httpClient';
import { GET_VEHICLE_MARK_LIST_PATH } from '../constants';

export const getVehicleMarkList = async () => {
  const res = await request({
    path: GET_VEHICLE_MARK_LIST_PATH,
  });
  return res?.data;
};
