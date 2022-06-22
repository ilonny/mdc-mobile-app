import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TOption } from '../modules/ui/Select/Select';

export type RootStackParamList = {
  InitialScreen: undefined;
  OnboardingMainScreen: undefined;
  OnboardingStoriesScreen: undefined;
  OnboardingPushScreen: undefined;
  AuthScreen: undefined;
  UserFilesScreen: undefined;
  TabScreen: undefined;
  SelectScreen: {
    onPressOption: (option: TOption) => void;
    title: string;
    options?: TOption[];
    value: any;
    isSuggestions?: boolean;
    suggestionsPrefix?: string;
  };
};

export type CarStackParamList = {
  CarMainScreen: undefined;
  CarListScreen: undefined;
  CarDetailScreen: {
    vehicle_id: string;
  };
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
