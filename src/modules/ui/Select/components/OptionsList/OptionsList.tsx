import React, { useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  Typography,
  TouchableFeedback,
  ImageView,
  ImageSource,
  CheckBox,
} from '../../../../ui';
import { TOption } from '../../Select';
import { styles } from './styles';
import { RootRouteProps } from '../../../../../navigation/types';

export const OptionsList: React.FC<{
  options: TOption[];
  loading?: boolean;
  onPressOption: (option: TOption) => void;
}> = ({ options, loading, onPressOption }) => {
  const route = useRoute<RootRouteProps<'SelectScreen'>>();
  const multiple = route?.params?.multiple;
  const value = route?.params?.value;
  return (
    <View>
      {options?.map(c => {
        if (multiple) {
          const initialChecked = !!value?.find(v => v.value == c.value);
          // console.log('c', c, value);
          return (
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <CheckBox
                  fullwidth
                  onPress={() => onPressOption(c)}
                  initialChecked={initialChecked}>
                  <Typography.MainText>{c.label}</Typography.MainText>
                </CheckBox>
              </View>
            </View>
          );
        }
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
