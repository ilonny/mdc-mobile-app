import React, { useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Field, useForm } from 'react-final-form';
import { TextInput, TouchableFeedback } from '..';
import { styles } from './styles';
import { XOR } from '../../../types';
import { NavigationProps } from '../../../navigation/types';
import { Typography } from '../Typography';

export type TOption = {
  label: string;
  value: string;
  extraData?: any;
};

type TRestProps = {
  onChange?: (arg: string, extraData?: any) => void;
  placeholder?: string;
  children: JSX.Element;
};

type TProps = TRestProps &
  XOR<{ isSuggestions: boolean }, { options: TOption[] }>;

export const Select = (props: TProps) => {
  const { placeholder, onChange, options, children } = props;
  const navigation = useNavigation<NavigationProps>();
  const [selectedOption, setSelectedOption] = useState<null | TOption>(null);

  const openSelect = useCallback(() => {
    navigation.navigate('SelectScreen', {
      onPressOption: (option: TOption) => {
        navigation.getParent()?.goBack();
        // navigation.goBack();
        setSelectedOption(option);
      },
      title: `Select ${placeholder}`,
      options,
      value: selectedOption?.value,
    });
  }, [navigation, placeholder, options, selectedOption]);

  useEffect(() => {
    if (selectedOption) {
      if (typeof onChange === 'function') {
        onChange(selectedOption.value as string, selectedOption?.extraData);
      }
    }
  }, [selectedOption, onChange]);
  return (
    <TouchableFeedback onPress={openSelect}>
      {children}
      {/* <View style={{ width: 100, height: 100, backgroundColor: 'red' }}>
      </View> */}
    </TouchableFeedback>
  );
};
