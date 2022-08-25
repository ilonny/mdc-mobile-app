import { request } from '../../httpClient';
import { GET_NEW_CAR_LIST_PATH } from '../constants';

export const getNewCarList = async () => {
  const res = await request({
    path: GET_NEW_CAR_LIST_PATH,
  });
  return res?.data;
};
