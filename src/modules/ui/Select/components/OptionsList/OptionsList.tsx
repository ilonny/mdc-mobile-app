import React, { useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  Typography,
  TouchableFeedback,
  ImageView,
  ImageSource,
} from '../../../../ui';
import { TOption } from '../../Select';
import { styles } from './styles';
import { RootRouteProps } from '../../../../../navigation/types';

export const OptionsList: React.FC<{
  options: TOption[];
  loading?: boolean;
}> = ({ options, loading }) => {
  const route = useRoute<RootRouteProps<'SelectScreen'>>();
  const value = route?.params?.value;
  const onPressOption = useCallback(
    (option: TOption) => {
      if (typeof route?.params?.onPressOption === 'function') {
        route?.params?.onPressOption(option);
      }
    },
    [route.params],
  );
  return (
    <View>
      {options?.map(c => {
        return (
          <TouchableFeedback key={c.value} onPress={() => onPressOption(c)}>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <Typography.MainText>{c.label}</Typography.MainText>
              </View>
              {/* {c.value === value && (
                <ImageView
                  source={ImageSource.checkmark_circle}
                  style={styles.checkMarkIcon}
                />
              )} */}
            </View>
          </TouchableFeedback>
        );
      })}
      {!!loading && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
