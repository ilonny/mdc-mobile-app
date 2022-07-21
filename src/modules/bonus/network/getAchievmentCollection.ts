import { request } from '../../httpClient';

export const getAchievmentCollection = async () => {
  const res = await request({
    path: 'achievment-collection/list',
  });
  return res?.data;
};
