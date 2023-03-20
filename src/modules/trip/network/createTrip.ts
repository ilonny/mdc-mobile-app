import moment from 'moment';
import { request } from '../../httpClient';

export const createTrip = async (params: Record<any, any>) => {
  console.log('createTrip data', params);
  params = {
    ...params,
    date_start: moment(params.date_start, 'DD/MM/YYYY')
      .add(1, 'days')
      .format('MM-DD-YYYY'),
    date_end: moment(params.date_end, 'DD/MM/YYYY')
      .add(1, 'days')
      .format('MM-DD-YYYY'),
  };
  const res = await request({
    path: 'trip/set',
    method: 'POST',
    body: JSON.stringify(params),
  });
  return res?.data;
};
