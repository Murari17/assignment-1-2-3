import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const WelcomeScreen = ({ setCurrentScreen }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Button title="Go to Login" onPress={() => setCurrentScreen('Login')} />
    </View>
  );
};

export default WelcomeScreen;
