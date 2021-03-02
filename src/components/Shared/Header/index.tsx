import React, { FC, memo, useMemo } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// components
import Button from '@/components/Shared/Button';
import Text from '@/components/Shared/Text';

// utils
import { BUTTON_TYPES, TEXT_TYPES, DEFAULT_ICON_SIZE, COLORS } from '@/utils/constants/styles';

import styles from './styles';

// TO-DO
// status bar background color issue

type HeaderProps = {
  title: string;
  navigation: StackNavigationProp<any, any>;
  topInset?: number;
  headerColor?: string;

  leftIcon?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  onLeftIconPress?: () => any;

  rightIcon?: string;
  rightIconSize?: number;
  rightIconColor?: string;
  onRightIconPress?: () => any;

  rightText?: string;
  rightButtonLoading?: boolean;
  rightTextColor?: string;
  onRightTextPress?: () => any;

  secondRightIcon?: string;
  secondRightIconSize?: number;
  secondRightIconColor?: string;

  onSecondRightIconPress?: () => any;
};

const Header: FC<HeaderProps> = (props) => {
  const {
    title,
    navigation,
    topInset = 0,
    headerColor = COLORS.WHITE,

    leftIcon = 'chevron-back',
    leftIconSize = DEFAULT_ICON_SIZE,
    leftIconColor = COLORS.BLACK,
    onLeftIconPress,

    rightIcon,
    rightIconSize = DEFAULT_ICON_SIZE,
    rightIconColor = COLORS.BLACK,
    onRightIconPress,

    rightText,
    rightButtonLoading,
    rightTextColor,
    onRightTextPress,

    secondRightIcon,
    secondRightIconSize = DEFAULT_ICON_SIZE,
    secondRightIconColor = COLORS.BLACK,

    onSecondRightIconPress,
  } = props;

  const onLeftPress = onLeftIconPress ? onLeftIconPress : navigation.goBack;

  const containerStyle = useMemo(
    () => [
      styles.container,
      { height: styles.container.height + topInset, backgroundColor: headerColor },
    ],
    [topInset, headerColor],
  );

  return (
    <View style={containerStyle}>
      <View style={styles.header}>
        {leftIcon ? (
          <Button
            buttonStyle={styles.left}
            buttonType={BUTTON_TYPES.ICON}
            iconName={leftIcon}
            onPress={onLeftPress}
            iconSize={leftIconSize}
            iconColor={leftIconColor}
          />
        ) : (
          <View style={styles.left} />
        )}
        <Text style={styles.title} type={TEXT_TYPES.HEADER_TITLE}>
          {title}
        </Text>
        {secondRightIcon ? (
          <Button
            buttonStyle={styles.secondRight}
            buttonType={BUTTON_TYPES.ICON}
            iconName={secondRightIcon}
            onPress={onSecondRightIconPress}
            iconSize={secondRightIconSize}
            iconColor={secondRightIconColor}
          />
        ) : null}
        {rightIcon ? (
          <Button
            buttonStyle={styles.right}
            buttonType={BUTTON_TYPES.ICON}
            iconName={rightIcon}
            onPress={onRightIconPress}
            iconSize={rightIconSize}
            iconColor={rightIconColor}
            loading={rightButtonLoading}
          />
        ) : rightText ? null : (
          <View style={styles.right} />
        )}
        {rightText ? (
          <Button
            buttonStyle={styles.right}
            buttonType={BUTTON_TYPES.TEXT}
            textStyle={[{ color: rightTextColor }]}
            label={rightText}
            onPress={onRightTextPress}
            loading={rightButtonLoading}
          />
        ) : null}
      </View>
    </View>
  );
};

export default memo(Header);
