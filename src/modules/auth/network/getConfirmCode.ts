import { request } from '../../httpClient';
import { GET_CODE_PATH } from '../constants';

export const getConfirmCode = async (phone: string) => {
  const res = await request({
    path: GET_CODE_PATH,
    method: 'POST',
    body: JSON.stringify({ phone }),
  });
  return res;
};
