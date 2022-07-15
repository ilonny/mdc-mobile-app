import { request } from './../../httpClient/request';
export const cancelTrip = async (id: string) => {
  const res = await request({
    path: 'trip/set',
    method: 'POST',
    body: JSON.stringify({
      id,
      status: 'CANCELED',
    }),
  });
  return res?.data;
};
