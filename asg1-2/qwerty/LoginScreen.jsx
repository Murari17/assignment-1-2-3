import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginScreen = () => (
    <View style={styles.box}>
        <Text style={styles.title}>Login</Text>
        <TextInput 
            placeholder="Username" 
            style={styles.input} 
            placeholderTextColor="#aaa"
        />
        <TextInput 
            placeholder="Password" 
            secureTextEntry 
            style={styles.input} 
            placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
);

export default LoginScreen;
