import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const WelcomeScreen = ({ setCurrentScreen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={() => setCurrentScreen('Login')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
