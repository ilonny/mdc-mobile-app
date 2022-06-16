import { request } from '../../httpClient';
import { GET_CAR_GALLERY_PATH } from '../constants';

export const getCarGallery = async (vehicle_id: string) => {
  const res = await request({
    path: `${GET_CAR_GALLERY_PATH}?vehicle_id=${vehicle_id}`,
  });
  return res?.data;
};
