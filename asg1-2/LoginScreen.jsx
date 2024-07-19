import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import styles from './styles';

const LoginScreen = ({ setCurrentScreen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setCurrentScreen('ProductList');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LOGIN</Text>
      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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
      <Button title="Login" onPress={handleLogin} color="#007BFF" />
      <TouchableOpacity onPress={() => setCurrentScreen('Register')} style={styles.registerLink}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
