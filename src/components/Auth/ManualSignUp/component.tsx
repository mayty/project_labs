import React, { FC, memo } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

// components
import Button from '@/components/Shared/Button';
import Text from '@/components/Shared/Text';
import Input from '@/components/Shared/Input';

// utils
import { BUTTON_TYPES, TEXT_TYPES } from '@/utils/constants/styles';

import styles from '../styles';

type SignInViewProps = {
  email: string;
  password: string;
  confirmPassword: string;
  onEmailChanged: (text: string) => void;
  onPasswordChanged: (text: string) => void;
  onConfirmPasswordChanged: (text: string) => void;
  signUp: () => void;
  disableSignUp?: boolean;
  loading?: boolean;
};

const SignInView: FC<SignInViewProps> = (props) => {
  const {
    signUp,
    email,
    password,
    confirmPassword,
    onEmailChanged,
    onPasswordChanged,
    onConfirmPasswordChanged,
    disableSignUp,
    loading,
  } = props;

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding" keyboardVerticalOffset={-50}>
      <Text style={styles.title} type={TEXT_TYPES.LARGE_TITLE_BOLD}>
        Sign up with Mail
      </Text>

      <View style={styles.inputsContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={onEmailChanged}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={onPasswordChanged}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={onConfirmPasswordChanged}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          buttonStyle={[styles.helpButton, styles.socialButton]}
          buttonType={BUTTON_TYPES.TEXT}
          label="Sign up"
          onPress={signUp}
          disabled={disableSignUp}
          disabledStyle={styles.disabledButton}
          loading={loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default memo(SignInView);
