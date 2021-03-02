import React, { FC, memo, useMemo } from 'react';
import { Text as RNText, TextStyle, StyleProp } from 'react-native';

import { TextType } from '@/types/styles';
import { TEXT_TYPES } from '@/utils/constants/styles';

import styles from './styles';

type TextProps = {
  type?: TextType;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text: FC<TextProps> = ({ children, type = TEXT_TYPES.PRIMARY, style }) => {
  const textStyle = useMemo(() => [styles[type], style], [style, type]);

  return <RNText style={textStyle}>{children}</RNText>;
};

export default memo(Text);
