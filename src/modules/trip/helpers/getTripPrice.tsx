import _ from 'lodash';
import { TTariff } from '../../car/types';

export const getTripPrice = (tariffs: TTariff[], days: number): number => {
  if (tariffs.length && !!days && days > 0) {
    const tariffsSortered = _.sortBy(
      tariffs,
      o => Number(o.max_days),
      'asc',
    ).reverse();
    const chosenTariff = tariffsSortered.find(t => days >= Number(t.min_days));
    if (chosenTariff) {
      // console.log('chosenTariff: ', chosenTariff);
      const resPrice =
        Number(chosenTariff?.promo_price) || Number(chosenTariff.price) || 0;
      return resPrice * days;
    }
  }
  return 0;
};
