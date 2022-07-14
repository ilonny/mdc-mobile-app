import { request } from '../../httpClient';

export const createTrip = async (params: Record<any, any>) => {
  console.log('createTrip data', params);
  params = {
    ...params,
  };
  const res = await request({
    path: 'trip/set',
    method: 'POST',
    body: JSON.stringify(params),
  });
  return res?.data;
};
