import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const RegisterScreen = () => (
    <View style={styles.box}>
        <Text style={styles.title}>Register</Text>
        <TextInput 
            placeholder="Username" 
            style={styles.input} 
            placeholderTextColor="#aaa" 
        />
        <TextInput 
            placeholder="Email" 
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
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
);

export default RegisterScreen;
