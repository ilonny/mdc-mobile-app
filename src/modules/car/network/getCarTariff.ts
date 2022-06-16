import { request } from '../../httpClient';
import { GET_CAR_TARIFF_PATH } from '../constants';

export const getCarTariff = async (vehicle_id: string) => {
  const res = await request({
    path: `${GET_CAR_TARIFF_PATH}?vehicle_id=${vehicle_id}`,
  });
  return res?.data;
};
