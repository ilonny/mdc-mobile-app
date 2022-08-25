export type TBonusStatus = {
  id: number;
  title: string | null;
  bonus_cost: string | null;
  description: string | null;
  other: string | null;
  image?: string;
};

export type TAchievment = {
  id: number;
  bonus_cost: string | null;
  description: string | null;
  other: string | null;
  title: string | null;
  available: boolean | undefined;
  received: boolean | undefined;
  unreceived: boolean | undefined;
};

export type TAchievmentCollection = {
  achievment_id: string;
  id: number;
  updatedAt: '2022-06-09';
  user_id: string | null;
};
