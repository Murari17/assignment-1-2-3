import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

const ReusableButton = ({ title, onPress, kind = 'primary', size = 'medium' }) => {
    const buttonStyles = [
        styles.button,
        styles[kind],
        styles[size],
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ReusableButton;
