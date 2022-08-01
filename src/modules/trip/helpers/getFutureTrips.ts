import moment from 'moment';
import { TTrip } from './../types/index';

export const getFutureTrips = (list: TTrip[]) => {
  return list?.filter(trip => {
    const today = moment();
    const dateEnd = moment(trip.date_end);
    if (dateEnd.diff(today, 'days') >= 0 && trip.status !== 'CANCELED') {
      return true;
    }
    return false;
  });
};
