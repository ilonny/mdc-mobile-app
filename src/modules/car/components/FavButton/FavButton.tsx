import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import {
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { useCarFavorite } from '../../hooks';
import { styles } from './styles';

type TProps = {
  vehicle_id: number;
  inCarCard?: boolean;
};

export const FavButton = (props: TProps) => {
  const { vehicle_id, inCarCard } = props;
  const { isFavorite, isFavoriteLoading, addFavorite, deleteFavorite } =
    useCarFavorite(vehicle_id);

  console;

  return (
    <TouchableFeedback
      style={[styles.wrapper, inCarCard && styles.inCarCardWrapper]}
      onPress={() => {
        isFavorite ? deleteFavorite() : addFavorite();
      }}>
      {isFavoriteLoading ? (
        <View style={styles.imageWrapper}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          {!inCarCard ? (
            <ImageView
              size={18}
              source={isFavorite ? ImageSource.heart_filled : ImageSource.heart}
            />
          ) : (
            <Row>
              <View style={styles.imageWrapper}>
                <ImageView
                  size={18}
                  source={
                    isFavorite ? ImageSource.heart_filled : ImageSource.heart
                  }
                />
              </View>
              <Indent width={15} />
              <Typography.BoldText fontSize={17}>
                {isFavorite ? translate('favRemove') : translate('favAdd')}
              </Typography.BoldText>
            </Row>
          )}
        </>
      )}
    </TouchableFeedback>
  );
};
