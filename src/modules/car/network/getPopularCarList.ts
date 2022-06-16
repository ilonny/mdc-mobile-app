import { request } from '../../httpClient';
import { GET_POPULAR_CAR_LIST_PATH } from '../constants';

export const getPopularCarList = async () => {
  const res = await request({
    path: GET_POPULAR_CAR_LIST_PATH,
  });
  return res?.data;
};
