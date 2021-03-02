import React, { memo } from 'react';
import { View } from 'react-native';

// components
import Text from '@/components/Shared/Text';

// utils
import { TEXT_TYPES } from '@/utils/constants/styles';

import styles from './styles';

const SplashView = () => {
  return (
    <View style={styles.screen}>
      <Text type={TEXT_TYPES.LARGE_TITLE_BOLD}>Notes App</Text>
    </View>
  );
};

export default memo(SplashView);
