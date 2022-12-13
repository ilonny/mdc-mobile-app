import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';

export const getAchievmentCollection = async () => {
  const user_id = await Storage.getItem('user_id');
  const res = await request({
    path: `achievment-collection/list?user_id=${user_id}`,
  });
  return res?.data;
};
