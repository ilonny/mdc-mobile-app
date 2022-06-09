import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { InitialScreen } from '../modules/core/screens';
import { OnboardingMainScreen } from '../modules/onboarding/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const modalScreenOptions: { presentation: 'modal' } = {
  presentation: 'modal',
};

const canNotGoBackOptions: { gestureEnabled: false } = {
  gestureEnabled: false,
};

export const Routes: React.FC<{
  initialRouteName: keyof RootStackParamList;
}> = ({ initialRouteName }) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen
          name="OnboardingMainScreen"
          component={OnboardingMainScreen}
          options={canNotGoBackOptions}
        />
        {/* <Stack.Screen name="TabScreen" component={TabScreen} /> */}
      </Stack.Navigator>
    </>
  );
};
