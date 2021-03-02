import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import React, { FC, memo, useMemo } from 'react';

// types
import { TextType } from '@/types/styles';

//utils
import { getTextStyleByType } from '@/utils/helpers/styles';

import styles from './styles';

type InputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  textType?: TextType;
};

const Input: FC<InputProps> = ({ style, containerStyle, textType, ...props }) => {
  const inputContainerStyle = useMemo(() => [styles.container, containerStyle], [containerStyle]);
  const inputStyle = useMemo(
    () => [styles.input, textType && getTextStyleByType(textType), style],
    [style, textType],
  );

  return (
    <View style={inputContainerStyle}>
      <TextInput {...props} style={inputStyle} />
    </View>
  );
};

export default memo(Input);
