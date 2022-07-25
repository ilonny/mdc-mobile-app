import React, { useEffect } from 'react';
import { reset } from '../../../navigation';
import { registerToken } from '../../push/helpers';
import { FullScreenLoader } from '../../ui';
import { useGetInitialRouteName } from '../hooks';

export const InitialScreen = () => {
  const { getInitialRouteName } = useGetInitialRouteName();

  useEffect(() => {
    registerToken();
    getInitialRouteName().then(reset);
  }, []);

  return <FullScreenLoader />;
};
