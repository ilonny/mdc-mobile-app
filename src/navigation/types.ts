import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  InitialScreen: undefined;
  OnboardingMainScreen: undefined;
  OnboardingStoriesScreen: undefined;
  OnboardingPushScreen: undefined;
  AuthScreen: undefined;
  UserFilesScreen: undefined;
  TabScreen: undefined;
};

export type CarStackParamList = {
  CarMainScreen: undefined;
};

export type ProfileStackParamList = {
  ProfileMainScreen: undefined;
};

export type TripStackParamList = {
  TripMainScreen: undefined;
};

export type ServiceStackParamList = {
  ServiceMainScreen: undefined;
};

export type StackParamList = RootStackParamList &
  CarStackParamList &
  ProfileStackParamList &
  TripStackParamList &
  ServiceStackParamList;

export type NavigationProps = NativeStackNavigationProp<StackParamList>;

export type RootRouteProps<RouteName extends keyof StackParamList> = RouteProp<
  StackParamList,
  RouteName
>;
