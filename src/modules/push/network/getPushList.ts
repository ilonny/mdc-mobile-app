import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';

export const getPushList = async () => {
  const user_id = await Storage.getItem('user_id');
  if (user_id) {
    const res = await request({
      path: `push/list?user_id=${user_id}`,
    });
    return res?.data;
  }
  return [];
};
