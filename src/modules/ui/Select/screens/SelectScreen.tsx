import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScreenContainer,
  ScreenHeader,
  Typography,
  SecondaryButton,
  TextInput,
  Indent,
} from '../../../ui';
import { OptionsList } from '../components';
import { useSuggestions } from '../hooks';
import { TOption } from '../Select';
import { RootRouteProps } from '../../../../navigation/types';

export const SelectScreen = () => {
  const route = useRoute<RootRouteProps<'SelectScreen'>>();
  const navigation = useNavigation();
  const [loading] = useState(false);
  const [options] = useState<TOption[]>(
    //@ts-ignore
    route?.params?.options || [],
  );
  const [optionsFiltered, setOptionsFiltered] = useState<TOption[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const searchLocal = useCallback(
    (searchQuery: string) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        if (searchQuery) {
          const lowerTerm = searchQuery.toLowerCase();
          setOptionsFiltered(
            options.filter(c => {
              const name: string = c.label;
              const nameLower = name.toLowerCase();
              if (nameLower.includes(lowerTerm)) {
                return true;
              }
            }),
          );
        } else {
          setOptionsFiltered([]);
        }
      }, 200);
    },
    [options],
  );

  useEffect(() => {
    searchLocal(searchTerm);
  }, [searchTerm, searchLocal]);
  return (
    <ScreenContainer fullscreen={true}>
      <ScreenHeader
        rightButton={
          <SecondaryButton isWhite onPress={goBack}>
            Cancel
          </SecondaryButton>
        }
      />
      {/* <Typography.ScreenTitle small>
        {route?.params?.title || 'Select option'}
      </Typography.ScreenTitle> */}
      <Indent height={16} />
      {/* <TextInput
        isGray
        placeholder="Search"
        searchIcon
        value={searchTerm}
        isSmall
        onChangeText={setSearchTerm}
      /> */}
      <Indent height={16} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <OptionsList
          options={optionsFiltered?.length ? optionsFiltered : options}
        />
      )}
    </ScreenContainer>
  );
};
