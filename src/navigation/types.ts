import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  InitialScreen: undefined;
  OnboardingMainScreen: undefined;
  OnboardingStoriesScreen: undefined;
  OnboardingPushScreen: undefined;
  AuthScreen: undefined;
  TabScreen: undefined;
};

export type IdentityStackParamList = {};

export type AccountStackParamList = {};

export type StackParamList = RootStackParamList &
  IdentityStackParamList &
  AccountStackParamList;

export type NavigationProps = NativeStackNavigationProp<StackParamList>;

export type RootRouteProps<RouteName extends keyof StackParamList> = RouteProp<
  StackParamList,
  RouteName
>;
