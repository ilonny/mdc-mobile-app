import { request } from '../../httpClient';

export const getPromoblockList = async () => {
  const res = await request({
    path: 'promoblock/list',
  });
  return res?.data;
};
