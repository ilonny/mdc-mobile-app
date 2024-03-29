import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { InitialScreen } from '../modules/core/screens';
import {
  OnboardingMainScreen,
  OnboardingStoriesScreen,
  OnboardingPushScreen,
} from '../modules/onboarding/screens';
import { AuthScreen } from '../modules/auth/screens';
import { UserFilesScreen } from '../modules/user/screens';
import { TabScreen } from './TabRoutes';
import { SelectScreen } from '../modules/ui/Select/screens/SelectScreen';
import {
  TripCreateScreen,
  TripDetailsScreen,
  TripSuccessScreen,
} from '../modules/trip/screens';
import {
  PaymentScreen,
  PaymentSuccessScreen,
} from '../modules/payment/screens';
import { AchievmentListScreen } from '../modules/bonus/screens';
import { ProfileNotificationsScreen } from '../modules/profile/screens';
import {
  ArticleDetailScreen,
  ArticleListScreen,
} from '../modules/article/screens';
import { CarFavoriteListScreen } from '../modules/car/screens';
import { PollMainScreen, PollResultScreen } from '../modules/poll/screens';

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
          name="PaymentScreen"
          component={PaymentScreen}
          // options={modalScreenOptions}
        />
        <Stack.Screen
          name="SelectScreen"
          component={SelectScreen}
          options={modalScreenOptions}
        />
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
        <Stack.Screen
          name="OnboardingStoriesScreen"
          component={OnboardingStoriesScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen
          name="OnboardingPushScreen"
          component={OnboardingPushScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen
          name="UserFilesScreen"
          component={UserFilesScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen name="TripCreateScreen" component={TripCreateScreen} />
        <Stack.Screen
          name="TripSuccessScreen"
          component={TripSuccessScreen}
          options={canNotGoBackOptions}
        />
        <Stack.Screen name="TripDetailsScreen" component={TripDetailsScreen} />
        <Stack.Screen
          name="AchievmentListScreen"
          component={AchievmentListScreen}
        />
        <Stack.Screen
          name="ProfileNotificationsScreen"
          component={ProfileNotificationsScreen}
        />
        <Stack.Screen name="ArticleListScreen" component={ArticleListScreen} />
        <Stack.Screen
          name="ArticleDetailScreen"
          component={ArticleDetailScreen}
        />
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccessScreen}
        />
        <Stack.Screen
          name="CarFavoriteListScreen"
          component={CarFavoriteListScreen}
        />
        <Stack.Screen name="PollMainScreen" component={PollMainScreen} />
        <Stack.Screen name="PollResultScreen" component={PollResultScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </>
  );
};
