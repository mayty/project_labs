import React, { FC, memo } from 'react';
import { View } from 'react-native';

// components
import Button from '@/components/Shared/Button';
import Text from '@/components/Shared/Text';

// utils
import { BUTTON_TYPES, TEXT_TYPES } from '@/utils/constants/styles';

import styles from '../styles';

type SignUpViewProps = {
  openSignIn: () => void;
  openManualSignUp: () => void;
  openGoogleSignUp: () => void;
  googleLoading?: boolean;
};

const SignUpView: FC<SignUpViewProps> = (props) => {
  const { openSignIn, openManualSignUp, openGoogleSignUp, googleLoading } = props;

  return (
    <View style={styles.screen}>
      <Text style={styles.title} type={TEXT_TYPES.LARGE_TITLE_BOLD}>
        Welcome
      </Text>

      <View style={styles.socialContainer}>
        <Button
          buttonType={BUTTON_TYPES.TEXT_ICON}
          label={'Google Sign Up'}
          buttonStyle={styles.socialButton}
          iconSize={24}
          iconName="logo-google"
          onPress={openGoogleSignUp}
          loading={googleLoading}
        />
        <Button
          buttonType={BUTTON_TYPES.TEXT_ICON}
          label={'Email Sign Up'}
          buttonStyle={styles.socialButton}
          iconSize={24}
          iconName="mail"
          onPress={openManualSignUp}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          buttonType={BUTTON_TYPES.TEXT}
          label="Already have account? Sign In"
          buttonStyle={styles.helpButton}
          textStyle={styles.helpText}
          onPress={openSignIn}
        />
      </View>
    </View>
  );
};

export default memo(SignUpView);
