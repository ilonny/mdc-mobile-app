import { request } from '../../httpClient';

export const saveToken = async (token: string, user_id: string) => {
  const res = await request({
    path: 'user-token/add',
    body: JSON.stringify({ token, user_id }),
    method: 'POST',
  });
  console.log('res: ', res);
};
