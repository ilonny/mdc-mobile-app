import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';
import { SET_USER_DATA_PATH } from '../constants';

export const setUserData = async (values: Record<string, any>) => {
  const body = new FormData();
  const user_id = await Storage.getItem('user_id');

  body.append('user_id', user_id);

  Object.entries(values).forEach(([key, value]) => {
    if (key.includes('page') || key.includes('selfie')) {
      body.append(key, {
        uri: `${value.replace('file://', '')}`,
        type: 'image/jpg',
        // name: `${key}`,
        name: `${user_id}_${key}.jpg`,
      });
    } else {
      body.append(key, value);
    }
  });

  const res = await request({
    path: SET_USER_DATA_PATH,
    body,
    method: 'POST',
  });
  return res;
};
