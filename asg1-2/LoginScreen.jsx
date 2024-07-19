import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomTextInput from './CustomTextInput';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>LOGIN</Text>
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
            <Button title="Login" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: "white",
    },
    input: {
        width: '100%', // Ensure equal length
    },
});

export default LoginScreen;
