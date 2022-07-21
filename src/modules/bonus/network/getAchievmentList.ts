import { request } from '../../httpClient';

export const getAchievmentList = async () => {
  const res = await request({
    path: 'achievment/list',
  });
  return res?.data;
};
