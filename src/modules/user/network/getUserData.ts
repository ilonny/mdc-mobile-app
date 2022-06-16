import { request } from '../../httpClient';
import { GET_USER_DATA_PATH } from '../constants';

export const getUserData = async (user_id: string) => {
  if (!user_id) {
    return false;
  }
  const res = await request({
    path: `${GET_USER_DATA_PATH}?user_id=${user_id}`,
  });
  //@ts-ignore
  return res?.data;
};
