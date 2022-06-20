import { TCar } from '../types';

type TFilters = {
  vehicleTypeId?: string;
  markId?: string;
};

export const filterCarList = (carList: TCar[], filters: TFilters) => {
  const { vehicleTypeId, markId } = filters;

  let res = carList;

  if (vehicleTypeId) {
    res = res.filter(car => car.vehicle_type_id === vehicleTypeId);
  }

  if (markId) {
    res = res.filter(car => car.vehicle_mark_id === markId);
  }

  return res;
};
