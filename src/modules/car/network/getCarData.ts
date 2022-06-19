import { request } from '../../httpClient';
import { API_URL } from '../../httpClient/constants';
import { GET_CAR_DATA_PATH } from '../constants';
import { getCarGallery } from './getCarGallery';
import { getCarTariff } from './getCarTariff';

export const getCarData = async (ids: string[]) => {
  const dataReqs = ids.map(id =>
    request({
      path: `${GET_CAR_DATA_PATH}?id=${id}`,
    }),
  );
  let dataArr = await Promise.all(dataReqs);
  dataArr = await Promise.all(
    dataArr.map(async res => {
      const data = res?.data;
      data.main_image = `${API_URL}/${res?.data?.main_image}`;
      data.tariffs = await getCarTariff(data.id);
      data.gallery = await getCarGallery(data.id);
      return data;
    }),
  );
  return dataArr;
};
