import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ImageSource, ImageView, TouchableFeedback } from '../../../ui';
import { useCarFavorite } from '../../hooks';
import { styles } from './styles';

type TProps = {
  vehicle_id: number;
};

export const FavButton = (props: TProps) => {
  const { vehicle_id } = props;
  const { isFavorite, isFavoriteLoading, addFavorite, deleteFavorite } =
    useCarFavorite(vehicle_id);

  console;

  return (
    <TouchableFeedback
      style={styles.wrapper}
      onPress={() => {
        isFavorite ? deleteFavorite() : addFavorite();
      }}>
      {isFavoriteLoading ? (
        <ActivityIndicator />
      ) : (
        <ImageView
          size={18}
          source={isFavorite ? ImageSource.heart_filled : ImageSource.heart}
        />
      )}
    </TouchableFeedback>
  );
};
