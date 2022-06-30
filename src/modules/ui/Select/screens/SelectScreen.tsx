import React, { useCallback, useState, useRef, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScreenContainer,
  ScreenHeader,
  Typography,
  SecondaryButton,
  TextInput,
  Indent,
  Button,
} from '../../../ui';
import { OptionsList } from '../components';
import { TOption } from '../Select';
import { RootRouteProps } from '../../../../navigation/types';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';

export const SelectScreen = () => {
  const route = useRoute<RootRouteProps<'SelectScreen'>>();
  const navigation = useNavigation();
  const [loading] = useState(false);
  const [options] = useState<TOption[]>(
    //@ts-ignore
    route?.params?.options || [],
  );

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const multiple = !!route?.params?.multiple;
  const value = route?.params?.value;
  const onChange = route?.params?.onChange;

  const [selectedOption, setSelectedOption] = useState<
    null | TOption | TOption[]
  >(multiple ? (Array.isArray(value) ? value : []) : null);

  const onPressOption = useCallback(
    (option: TOption) => {
      if (multiple) {
        if (selectedOption.find(o => o.value == option.value)) {
          setSelectedOption(s => s?.filter(o => o.value != option.value));
        } else {
          setSelectedOption(s => s?.concat(option));
        }
      } else {
        if (option) {
          //@ts-ignore
          onChange(option?.value as string, option?.extraData);
          navigation.goBack();
        }
        // setSelectedOption(option);
      }
    },
    [multiple, selectedOption, navigation],
  );

  const onPressResetFilter = useCallback(() => {
    if (multiple) {
      //@ts-ignore
      onChange([]);
    } else {
      //@ts-ignore
      onChange(null);
    }
    setSelectedOption(null);
    navigation.goBack();
  }, [navigation, multiple, onChange]);

  const onPressSaveFilter = useCallback(() => {
    if (selectedOption?.length) {
      //@ts-ignore
      onChange(selectedOption);
    } else {
      //@ts-ignore
      onChange([]);
    }
    navigation.goBack();
  }, [navigation, multiple, selectedOption]);

  return (
    <ScreenContainer
      fullscreen={true}
      footer={
        multiple ? (
          <>
            <Button isWhite onPress={onPressSaveFilter}>
              <Typography.ButtonText color={colors.totalBlack}>
                {translate('saveFilter')}
              </Typography.ButtonText>
            </Button>
            <Button onPress={onPressResetFilter}>
              <Typography.ButtonText>
                {translate('resetFilter')}
              </Typography.ButtonText>
            </Button>
          </>
        ) : (
          <></>
        )
      }>
      <ScreenHeader
        rightButton={
          <SecondaryButton isWhite onPress={goBack}>
            Cancel
          </SecondaryButton>
        }
      />
      <Indent height={32} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <OptionsList options={options} onPressOption={onPressOption} />
      )}
    </ScreenContainer>
  );
};
