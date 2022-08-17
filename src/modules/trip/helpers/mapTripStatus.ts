import { translate } from '../../translation';

export const mapTripStatus = (tripsStatus: string): string => {
  switch (tripsStatus) {
    case 'CREATED':
      return translate('trip_CREATED');
    case 'CONFIRMED':
      return translate('trip_CONFIRMED');
    case 'INPROGRESS':
      return translate('trip_INPROGRESS');
    case 'COMPLETED':
      return translate('trip_COMPLETED');
    case 'CANCELED':
      return translate('trip_CANCELED');
    default:
      return tripsStatus;
  }
};
