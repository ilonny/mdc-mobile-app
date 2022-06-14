import { request } from '../../httpClient';
import { AUTH_WITCH_CODE_PATH } from '../constants';

export const authWithCode = async (phone: string, code: string) => {
  const res = await request({
    path: AUTH_WITCH_CODE_PATH,
    method: 'POST',
    body: JSON.stringify({ phone, code, mobile: '1' }),
  });
  return res;
};
