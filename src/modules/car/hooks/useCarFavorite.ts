import { useCallback, useState, useEffect } from 'react';
import {
  addCarFavorite,
  deleteCarFavorite,
  getCarIsFavorite,
} from '../network';

export const useCarFavorite = (vehicle_id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

  const checkFavorite = useCallback(async () => {
    setIsFavoriteLoading(true);
    const isFavorite = await getCarIsFavorite(vehicle_id);
    setIsFavorite(isFavorite);
    setIsFavoriteLoading(false);
  }, [vehicle_id]);

  const addFavorite = useCallback(async () => {
    setIsFavoriteLoading(true);
    await addCarFavorite(vehicle_id);
    await checkFavorite();
  }, [vehicle_id, checkFavorite]);

  const deleteFavorite = useCallback(async () => {
    setIsFavoriteLoading(true);
    await deleteCarFavorite(vehicle_id);
    await checkFavorite();
  }, [vehicle_id, checkFavorite]);

  useEffect(() => {
    checkFavorite();
  }, [checkFavorite]);

  return {
    isFavorite,
    isFavoriteLoading,
    checkFavorite,
    addFavorite,
    deleteFavorite,
  };
};
