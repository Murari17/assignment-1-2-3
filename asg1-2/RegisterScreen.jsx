import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CustomTextInput from './CustomTextInput';
import styles from './styles';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>REGISTER</Text>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="gray"
        style={styles.input}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="gray"
        style={styles.input}
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Button title="Register" onPress={() => {}} color="#007BFF" />
    </View>
  );
};

export default RegisterScreen;
