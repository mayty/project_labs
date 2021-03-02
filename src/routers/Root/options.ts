import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

export const SharedNavigationOptions: StackNavigationOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureEnabled: true,
};
