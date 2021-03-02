import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// components
import Text from '@/components/Shared/Text';
import Button from '@/components/Shared/Button';

// types
import { SharedStackParams } from '@/types/routes';

// utils
import { SHARED_STACK } from '@/utils/constants/routes';

import styles from './styles';
import { BUTTON_TYPES, TEXT_TYPES } from '@/utils/constants/styles';

const DEFAULT_MESSAGE = 'Comming soon';

type UnavailableViewProps = {
  navigation: StackNavigationProp<SharedStackParams, SHARED_STACK.UNAVAILABLE>;
  route: RouteProp<SharedStackParams, SHARED_STACK.UNAVAILABLE>;
};

const UnavailableView: FC<UnavailableViewProps> = (props) => {
  const { navigation, route } = props;

  const message = route.params?.message || DEFAULT_MESSAGE;
  const onClose = route.params?.onClose || navigation.goBack;

  return (
    <View style={styles.screen}>
      <Text type={TEXT_TYPES.HEADER_TITLE}>{message}</Text>
      <Button
        buttonType={BUTTON_TYPES.ICON}
        iconSize={40}
        iconName="close-outline"
        buttonStyle={styles.close}
        onPress={onClose}
      />
      <Button
        buttonStyle={styles.button}
        buttonType={BUTTON_TYPES.TEXT}
        textType={TEXT_TYPES.TITLE_BOLD}
        label="Dismiss"
        onPress={onClose}
      />
    </View>
  );
};

export default memo(UnavailableView);
