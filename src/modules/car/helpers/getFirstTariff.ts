import { TTariff } from '../types';

export const getFirstTariff = (tariffs: TTariff[]): TTariff | null => {
  if (!tariffs || !tariffs.length) {
    return null;
  }
  const res =
    tariffs.reverse().find(tariff => !!parseInt(tariff.price)) || tariffs[0];
  return res;
};
