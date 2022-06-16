import { ImageSource } from './../../ui/ImageView/ImageSource';
import { translate } from '../../translation';

export const GET_VEHICLE_TYPE_LIST_PATH = 'vehicle-type/list';

type TData = Record<string, { label: string; icon: keyof typeof ImageSource }>;

export const mapData: TData = {
  Внедорожники: {
    label: translate('vehicleTypeOffroad'),
    icon: 'vehicle_type_offroad',
  },
  Кабриолеты: {
    label: translate('vehicleTypeCabrio'),
    icon: 'vehicle_type_cabrio',
  },
  Спорткары: {
    label: translate('vehicleTypeSport'),
    icon: 'vehicle_type_sport',
  },
  Купе: {
    label: translate('vehicleTypeCoupe'),
    icon: 'vehicle_type_coupe',
  },
  Премиум: {
    label: translate('vehicleTypePremium'),
    icon: 'vehicle_type_premium',
  },
  Мотоциклы: {
    label: translate('vehicleTypeBike'),
    icon: 'vehicle_type_bike',
  },
};
