import React, { FC, memo, useCallback, useMemo } from 'react';
import {
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  View,
} from 'react-native';

// components
import Text from '@/components/Shared/Text';
import Icon from '@/components/Shared/Icon';

// types
import { ButtonType, TextType } from '@/types/styles';

// utils
import { BUTTON_TYPES, COLORS, OPACITY, TEXT_TYPES } from '@/utils/constants/styles';

import styles from './styles';

type ButtonProps = {
  buttonType: ButtonType;
  textType?: TextType;
  label?: string;
  onPress?: () => any;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconSize?: number;
  iconName?: string;
  iconColor?: string;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  active?: boolean;
};

const getButtonInnerComponentByType = (
  buttonType: ButtonType,
  textType: TextType,
  iconName: string,
  label?: string,
  iconSize?: number,
  iconColor?: string,
  textStyle?: StyleProp<TextStyle>,
  active?: boolean,
): JSX.Element | null =>
  buttonType === BUTTON_TYPES.TEXT ? (
    <Text type={textType as TextType} style={textStyle}>
      {label}
    </Text>
  ) : buttonType === BUTTON_TYPES.ICON ? (
    <Icon size={iconSize} name={iconName} color={iconColor} />
  ) : buttonType === BUTTON_TYPES.TEXT_ICON ? (
    <>
      <Text type={textType as TextType} style={textStyle}>
        {label}
      </Text>
      <Icon size={iconSize} name={iconName} style={styles.iconStyle} color={iconColor} />
    </>
  ) : buttonType === BUTTON_TYPES.RADIO ? (
    <>
      <View style={styles.radioContainer}>{active && <View style={styles.radioActive} />}</View>
      <Text type={textType || TEXT_TYPES.MAIN} style={textStyle}>
        {label}
      </Text>
    </>
  ) : null;

const Button: FC<ButtonProps> = ({
  buttonType,
  label,
  textType,
  onPress,
  buttonStyle,
  iconName,
  iconSize,
  iconColor = COLORS.BLACK,
  textStyle,
  disabled,
  disabledStyle,
  loading,
  active,
}) => {
  const style = useMemo(
    () => [loading ? styles[BUTTON_TYPES.TEXT] : styles[buttonType], buttonStyle],
    [buttonStyle, buttonType, loading],
  );
  const disabledButtonStyle = useMemo(
    () => [disabled && styles.disabled, disabled && disabledStyle],
    [disabledStyle, disabled],
  );

  const InnerComponent = useCallback(
    () =>
      getButtonInnerComponentByType(
        buttonType,
        textType as TextType,
        iconName as string,
        label,
        iconSize,
        iconColor,
        textStyle,
        active,
      ),
    [buttonType, textType, label, iconName, iconSize, iconColor, textStyle, active],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={OPACITY}
      style={[style, disabledButtonStyle]}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={COLORS.BLACK} style={styles.loading} />
      ) : (
        <InnerComponent />
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
