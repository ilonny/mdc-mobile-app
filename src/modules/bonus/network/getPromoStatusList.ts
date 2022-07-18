import { request } from '../../httpClient';

export const getPromoStatusList = async () => {
  let res = await request({
    path: 'promo-status/list',
  });
  return res?.data;
};
