import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RootRouteProps } from '../../../navigation/types';
import { Indent, Row, ScreenContainer, Typography } from '../../ui';
import { CarGallery, FavButton } from '../components';
import { getCarData } from '../network';
import { TCar } from '../types';

export const CarDetailScreen = () => {
  const route = useRoute<RootRouteProps<'CarDetailScreen'>>();
  const { vehicle_id } = route.params;
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState<TCar | null>(null);

  useEffect(() => {
    setLoading(true);
    getCarData([vehicle_id])
      .then(res => {
        try {
          const data: TCar = res[0];
          setCarData(data);
        } catch (err) {}
      })
      .finally(() => setLoading(false));
  }, [vehicle_id]);

  console.log('carData', carData);

  return (
    <ScreenContainer headerProps={{ backButton: true }} isLoading={loading}>
      <Typography.ScreenTitle>{carData?.title || ''}</Typography.ScreenTitle>
      <Indent height={20} />
      <FavButton vehicle_id={Number(vehicle_id)} inCarCard />
      <Indent height={20} />
      <CarGallery sources={carData?.gallery.map(g => g.image) || []} />
    </ScreenContainer>
  );
};
