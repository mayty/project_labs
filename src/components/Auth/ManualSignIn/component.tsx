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
  onEmailChanged: (text: string) => void;
  onPasswordChanged: (text: string) => void;
  signIn: () => void;
  disableSignIn?: boolean;
  loading?: boolean;
};

const SignInView: FC<SignInViewProps> = (props) => {
  const {
    signIn,
    email,
    password,
    onEmailChanged,
    onPasswordChanged,
    disableSignIn,
    loading,
  } = props;

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding" keyboardVerticalOffset={-50}>
      <Text style={styles.title} type={TEXT_TYPES.LARGE_TITLE_BOLD}>
        Sign in with Mail
      </Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={onEmailChanged}
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={onPasswordChanged}
          secureTextEntry
          returnKeyType="done"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          buttonType={BUTTON_TYPES.TEXT}
          label="Sign in"
          onPress={signIn}
          buttonStyle={[styles.socialButton, styles.helpButton]}
          disabled={disableSignIn}
          disabledStyle={styles.disabledButton}
          loading={loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default memo(SignInView);
