export type TCar = {
  engine_layout: string;
  gallery: Array<Record<any, any>>;
  id: number;
  insurance_deposit: string;
  main_image: string;
  power: string;
  racing: string;
  sits_number: string;
  tariffs: Array<TTariff>;
  text_label: string | null;
  title: string;
  vehicle_mark_id: string;
  vehicle_type_id: string;
  video: string | null;
  volume: string;
  color_id?: string;
};

export type TTariff = {
  id: number;
  label: string | null;
  max_days: string;
  min_days: string;
  price: string;
  promo_price: string | null;
  vehicle_id: string;
};
