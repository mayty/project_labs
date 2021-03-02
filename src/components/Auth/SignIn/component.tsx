import React, { FC, memo } from 'react';
import { View } from 'react-native';

// components
import Button from '@/components/Shared/Button';
import Text from '@/components/Shared/Text';

// utils
import { BUTTON_TYPES, TEXT_TYPES } from '@/utils/constants/styles';

import styles from '../styles';

type SignInViewProps = {
  openSignUp: () => void;
  openManualSignIn: () => void;
  openGoogleSignIn: () => void;
  googleLoading?: boolean;
  twitterLoading?: boolean;
};

const SignInView: FC<SignInViewProps> = (props) => {
  const { openSignUp, openManualSignIn, openGoogleSignIn, googleLoading } = props;

  return (
    <View style={styles.screen}>
      <Text style={styles.title} type={TEXT_TYPES.LARGE_TITLE_BOLD}>
        Welcome
      </Text>

      <View style={styles.socialContainer}>
        <Button
          buttonType={BUTTON_TYPES.TEXT_ICON}
          label={'Google Sign In'}
          buttonStyle={styles.socialButton}
          iconSize={24}
          iconName="logo-google"
          onPress={openGoogleSignIn}
          loading={googleLoading}
        />
        <Button
          buttonType={BUTTON_TYPES.TEXT_ICON}
          label={'Email Sign In'}
          buttonStyle={styles.socialButton}
          iconSize={24}
          iconName="mail"
          onPress={openManualSignIn}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          buttonType={BUTTON_TYPES.TEXT}
          label="Don't have account? Sign Up"
          buttonStyle={styles.helpButton}
          textStyle={styles.helpText}
          onPress={openSignUp}
        />
      </View>
    </View>
  );
};

export default memo(SignInView);
