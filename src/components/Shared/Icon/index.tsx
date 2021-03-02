import React, { FC, memo } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

const Text: FC<IconProps> = (props) => {
  return <Icon {...props} />;
};

export default memo(Text);
