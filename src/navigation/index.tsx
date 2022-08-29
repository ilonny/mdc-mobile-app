import React, { useState } from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { FullScreenLoader } from '../modules/ui';
import { Routes } from './routes';
import { RootStackParamList } from './types';
import { ChatModal } from '../modules/support/components';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function reset(name: string) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: name }],
    }),
  );
}

export const Navigation = () => {
  const [ready, setReady] = useState(false);
  const [initialRouteName, setInitialRouteName] =
    useState<keyof RootStackParamList>('InitialScreen');

  return (
    <NavigationContainer onReady={() => setReady(true)} ref={navigationRef}>
      {ready ? (
        <>
          <Routes initialRouteName={initialRouteName} />
        </>
      ) : (
        <FullScreenLoader />
      )}
      <ChatModal />
    </NavigationContainer>
  );
};
