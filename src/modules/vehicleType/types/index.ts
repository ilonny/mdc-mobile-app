import { mapData } from '../constants';
export type TVehicleType = {
  label: keyof typeof mapData;
  id: number;
};
