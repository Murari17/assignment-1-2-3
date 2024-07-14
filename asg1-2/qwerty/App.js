import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import styles from './styles';

function App() {
    const [currentScreen, setCurrentScreen] = useState('Welcome');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Welcome':
                return <WelcomeScreen setCurrentScreen={setCurrentScreen} />;
            case 'Login':
                return <LoginScreen />;
            case 'Register':
                return <RegisterScreen />;
            default:
                return <WelcomeScreen setCurrentScreen={setCurrentScreen} />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => setCurrentScreen('Welcome')}>
                    <Text style={styles.navbarButton}>Welcome</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentScreen('Login')}>
                    <Text style={styles.navbarButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentScreen('Register')}>
                    <Text style={styles.navbarButton}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                {renderScreen()}
            </View>
        </SafeAreaView>
    );
}

export default App;
