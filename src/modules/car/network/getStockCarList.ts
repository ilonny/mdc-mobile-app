import { request } from '../../httpClient';
import { GET_STOCK_CAR_LIST_PATH } from '../constants';

export const getStockCarList = async () => {
  const res = await request({
    path: GET_STOCK_CAR_LIST_PATH,
  });
  return res?.data;
};
