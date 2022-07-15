import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';

export const getTripList = async () => {
  const user_id = await Storage.getItem('user_id');
  const res = await request({
    path: `trip/list?user_id=${user_id}`,
  });
  return res?.data;
};
