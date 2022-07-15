import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';

export const getTripData = async (id: string) => {
  const res = await request({
    path: `trip/get-data?id=${id}`,
  });
  return res?.data;
};
