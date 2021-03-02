import React, { useCallback, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// component
import Header from '@/components/Shared/Header';

// types
import { SettingsStackParams } from '@/types/routes';

// utils
import { SETTINGS_STACK, ROUTE_NAMES, ROOT_STACK, SHARED_STACK } from '@/utils/constants/routes';

type SettingsMenuNavigationProp = StackNavigationProp<SettingsStackParams, SETTINGS_STACK.MENU>;

type UseHeaderOptions = {
  title: string;
  leftIcon?: string;
  rightText?: string;
  onRightTextPress?: () => void;
  rightButtonLoading?: boolean;
};

export const useHeader = ({
  title,
  leftIcon,
  rightText,
  onRightTextPress,
  rightButtonLoading,
}: UseHeaderOptions) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation: navigationProp, insets }) => (
        <Header
          navigation={navigationProp}
          title={title}
          topInset={insets.top}
          leftIcon={leftIcon}
          rightText={rightText}
          rightButtonLoading={rightButtonLoading}
          onRightTextPress={onRightTextPress}
        />
      ),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, leftIcon, rightText, onRightTextPress, rightButtonLoading]);
};

export const produceHeaderHook = ({ title, leftIcon, rightText }: UseHeaderOptions) => {
  return (options?: { onRightTextPress?: () => void; rightButtonLoading?: boolean }) =>
    useHeader({
      title,
      leftIcon,
      rightText,
      onRightTextPress: options?.onRightTextPress,
      rightButtonLoading: options?.rightButtonLoading,
    });
};

export const useSettingsMenuHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.MENU],
  leftIcon: 'close',
});

export const useSettingsSocialAccountHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.ACCOUNT],
  leftIcon: 'chevron-back',
});

export const useSettingsManualAccountHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.ACCOUNT],
  leftIcon: 'chevron-back',
  rightText: 'Save',
});

export const useSettingsAppearanceHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.APPEARANCE],
  leftIcon: 'chevron-back',
});

export const useSettingsNotificationsHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.NOTIFICATIONS],
  leftIcon: 'chevron-back',
});

export const useSettingsAboutHeader = produceHeaderHook({
  title: ROUTE_NAMES[SETTINGS_STACK.ABOUT],
  leftIcon: 'chevron-back',
});

type UseOpenScreenOptions<T extends string> = {
  screenName: T;
};

export const useOpenScreen: <T extends string>(options: UseOpenScreenOptions<T>) => () => void = ({
  screenName,
}) => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  return () => navigation.navigate(screenName);
};

export const produceOpenScreenHook: <T extends string>(
  options: UseOpenScreenOptions<T>,
) => () => () => void = ({ screenName }) => {
  return () => useOpenScreen({ screenName });
};

export const useOpenAboutScreen = produceOpenScreenHook<SETTINGS_STACK>({
  screenName: SETTINGS_STACK.ABOUT,
});

export const useOpenAccountScreen = produceOpenScreenHook<SETTINGS_STACK>({
  screenName: SETTINGS_STACK.ACCOUNT,
});

export const useOpenUnavailable = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  // @ts-ignore
  const openUnavailable = useCallback(
    () =>
      navigation.navigate(ROOT_STACK.SHARED, {
        screen: SHARED_STACK.UNAVAILABLE,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return openUnavailable;
};
