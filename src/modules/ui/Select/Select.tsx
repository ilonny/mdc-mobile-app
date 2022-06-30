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
  onChange: (arg?: any, extraData?: any) => void;
  placeholder?: string;
  children: JSX.Element;
  multiple?: boolean;
  value?: any;
};

type TProps = TRestProps &
  XOR<{ isSuggestions: boolean }, { options: TOption[] }>;

export const Select = (props: TProps) => {
  const {
    placeholder,
    onChange,
    options,
    children,
    multiple = false,
    value,
  } = props;
  const navigation = useNavigation<NavigationProps>();
  const openSelect = useCallback(() => {
    navigation.navigate('SelectScreen', {
      title: `Select ${placeholder}`,
      options,
      multiple,
      onChange,
      value,
    });
  }, [navigation, placeholder, options, multiple, value]);

  // useEffect(() => {
  //   if (selectedOption) {
  //     if (typeof onChange === 'function') {
  //       onChange(selectedOption.value as string, selectedOption?.extraData);
  //     } else {
  //     }
  //   }
  // }, [selectedOption, onChange]);


  return (
    <TouchableFeedback onPress={openSelect}>
      {children}
      {/* <View style={{ width: 100, height: 100, backgroundColor: 'red' }}>
      </View> */}
    </TouchableFeedback>
  );
};
