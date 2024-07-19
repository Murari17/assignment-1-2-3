import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CustomTextInput from './CustomTextInput';
import styles from './styles'; // Import your styles

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="gray"
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="gray"
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="gray"
      />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
};

export default RegisterScreen;
