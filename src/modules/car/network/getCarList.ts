import { request } from '../../httpClient';
import { GET_CAR_LIST_PATH } from '../constants';

export const getCarList = async () => {
  const res = await request({ path: GET_CAR_LIST_PATH });
  return res?.data;
};
