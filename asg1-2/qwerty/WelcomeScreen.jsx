import React from 'react';
import { View, Text } from 'react-native';
import ReusableButton from './ReusableButton';
import styles from './styles';

const WelcomeScreen = ({ setCurrentScreen }) => (
    <View style={styles.box}>
        <Text style={styles.title}>WELCOME!!</Text>
        <Text style={styles.subtitle}>Please log in or register to continue.</Text>
        <View style={styles.buttonContainer}>
            <View style={styles.buttonBox}>
                <ReusableButton 
                    title="Login" 
                    onPress={() => setCurrentScreen('Login')} 
                    kind="primary" 
                />
            </View>
            <View style={styles.buttonBox}>
                <ReusableButton 
                    title="Register" 
                    onPress={() => setCurrentScreen('Register')} 
                    kind="primary" 
                />
            </View>
        </View>
    </View>
);

export default WelcomeScreen;
