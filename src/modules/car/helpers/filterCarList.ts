import { TCar } from '../types';
import { getFirstTariff } from './getFirstTariff';

type TFilters = {
  vehicleTypeId?: string;
  markId?: string;
  powerFrom?: string;
  powerTo?: string;
  priceFrom?: string;
  priceTo?: string;
};

export const filterCarList = (carList: TCar[], filters: TFilters) => {
  const {
    vehicleTypeId,
    markId,
    powerFrom,
    powerTo,
    priceFrom,
    priceTo,
    colorId,
  } = filters;
  let res = carList;

  if (vehicleTypeId) {
    res = res.filter(car => car.vehicle_type_id === vehicleTypeId);
  }

  if (markId) {
    res = res.filter(car => car.vehicle_mark_id === markId);
  }

  if (powerFrom) {
    res = res.filter(car => Number(car.power) >= Number(powerFrom));
  }
  if (powerTo) {
    res = res.filter(car => Number(car.power) <= Number(powerTo));
  }

  if (priceFrom) {
    res = res.filter(car => {
      const firstTariff = getFirstTariff(car.tariffs);
      return (
        Number(firstTariff?.promo_price || firstTariff?.price) >=
        Number(priceFrom)
      );
    });
  }

  if (priceTo) {
    res = res.filter(car => {
      const firstTariff = getFirstTariff(car.tariffs);
      return (
        Number(firstTariff?.promo_price || firstTariff?.price) <=
        Number(priceTo)
      );
    });
  }

  if (colorId) {
    res = res.filter(car => car.color_id === colorId);
  }
  return res;
};
