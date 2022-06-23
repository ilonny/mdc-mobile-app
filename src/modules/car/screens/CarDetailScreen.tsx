import { useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { RootRouteProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import { Button, Indent, Row, ScreenContainer, Typography } from '../../ui';
import {
  CarBenefits,
  CarChars,
  CardList,
  CarGallery,
  CarInsuranceDeposit,
  CarOptions,
  CarTariffs,
  CarVideoLink,
  FavButton,
} from '../components';
import { useCarList } from '../hooks';
import { getCarData } from '../network';
import { TCar } from '../types';

export const CarDetailScreen = () => {
  const route = useRoute<RootRouteProps<'CarDetailScreen'>>();
  const { vehicle_id } = route.params;
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState<TCar | null>(null);
  const { carList } = useCarList();

  const otherCarList = useMemo(() => {
    if (carList?.length && vehicle_id) {
      return carList?.filter(c => c.id.toString() !== vehicle_id)?.slice(0, 4);
    }
    return [];
  }, [carList, vehicle_id]);

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
      <Indent height={30} />
      <FavButton vehicle_id={Number(vehicle_id)} inCarCard />
      <Indent height={20} />
      <CarGallery sources={carData?.gallery.map(g => g.image) || []} />
      <Indent height={30} />
      <CarVideoLink videoLink={carData?.video} />
      <CarOptions />
      <CarTariffs tariffs={carData?.tariffs || []} />
      <Indent height={30} />
      <CarInsuranceDeposit amount={carData?.insurance_deposit || '0'} />
      <Indent height={30} />
      <Button isWhite>
        <Typography.BoldText color={colors.totalBlack}>
          {translate('bookBtn')}
        </Typography.BoldText>
      </Button>

      {carData ? (
        <>
          <Indent height={30} />
          <CarChars data={carData} />
        </>
      ) : (
        <></>
      )}
      <Indent height={30} />
      <CarVideoLink videoLink={carData?.video} isBig />
      <CarBenefits />
      <Indent height={30} />
      {otherCarList.length ? (
        <>
          <Typography.ScreenTitle>
            {translate('otherCars')}
          </Typography.ScreenTitle>
          <Indent height={30} />
          <CardList items={otherCarList} />
        </>
      ) : (
        <></>
      )}
      <Indent height={100} />
    </ScreenContainer>
  );
};
