import { TTariff } from '../types';

export const getFirstTariff = (tariffs: TTariff[]): TTariff | null => {
  if (!tariffs || !tariffs.length) {
    return null;
  }
  return tariffs[tariffs.length - 1];
};
