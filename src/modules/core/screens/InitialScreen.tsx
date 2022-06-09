import React, { useEffect } from 'react';
import { reset } from '../../../navigation';
import { FullScreenLoader } from '../../ui';
import { useGetInitialRouteName } from '../hooks';

export const InitialScreen = () => {
  const { getInitialRouteName } = useGetInitialRouteName();

  useEffect(() => {
    getInitialRouteName().then(reset);
  }, []);

  return <FullScreenLoader />;
};
