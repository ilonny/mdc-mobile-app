import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';
import { CAR_FAVORITE_PATH } from '../constants';

export const getCarIsFavorite = async (
  vehicle_id: number,
): Promise<boolean> => {
  const user_id = await Storage.getItem('user_id');
  const res = await request({
    path: `${CAR_FAVORITE_PATH}/list?vehicle_id=${vehicle_id}&user_id=${user_id}`,
    // body: JSON.stringify({ vehicle_id, user_id }),
  });
  //@ts-ignore
  return !!res?.data?.length;
};

export const addCarFavorite = async (vehicle_id: number) => {
  const user_id = await Storage.getItem('user_id');
  const res = await request({
    method: 'POST',
    path: `${CAR_FAVORITE_PATH}/add`,
    body: JSON.stringify({ vehicle_id, user_id }),
  });
  //@ts-ignore
  return !!res?.data?.length;
};

export const deleteCarFavorite = async (vehicle_id: number) => {
  const user_id = await Storage.getItem('user_id');
  const res = await request({
    method: 'POST',
    path: `${CAR_FAVORITE_PATH}/delete`,
    body: JSON.stringify({ vehicle_id, user_id }),
  });
  //@ts-ignore
  return !!res?.data?.length;
};
