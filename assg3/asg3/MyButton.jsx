import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const MyButton = ({
  kind = 'primary', // 'primary', 'secondary', 'danger', etc.
  variant = 'filled', // 'filled', 'outlined', 'text'
  size = 'medium', // 'small', 'medium', 'large'
  iconOnly = false,
  iconName, 
  text,
  onPress,
  disabled = false
}) => {
  const getButtonStyle = () => {
    let baseStyle = styles.baseButton;

    switch (kind) {
      case 'secondary':
        baseStyle = { ...baseStyle, ...styles.secondaryButton };
        break;
      case 'danger':
        baseStyle = { ...baseStyle, ...styles.dangerButton };
        break;
      case 'primary':
      default:
        baseStyle = { ...baseStyle, ...styles.primaryButton };
        break;
    }

    switch (variant) {
      case 'outlined':
        baseStyle = { ...baseStyle, ...styles.outlined };
        break;
      case 'text':
        baseStyle = { ...baseStyle, ...styles.text };
        break;
      case 'filled':
      default:
        break;
    }

    switch (size) {
      case 'small':
        baseStyle = { ...baseStyle, ...styles.small };
        break;
      case 'large':
        baseStyle = { ...baseStyle, ...styles.large };
        break;
      case 'medium':
      default:
        break;
    }

    return baseStyle;
  };

  const buttonStyle = getButtonStyle();
  const textStyle = [styles.buttonText, buttonStyle.textColor];
  const icon = iconName ? <Ionicons name={iconName} size={24} color={textStyle.color || 'white'} /> : null;

  return (
    <TouchableOpacity
      style={[buttonStyle, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconOnly ? (
        icon
      ) : (
        <View style={styles.buttonContent}>
          {icon && <View style={styles.icon}>{icon}</View>}
          {text && <Text style={textStyle}>{text}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  dangerButton: {
    backgroundColor: '#dc3545',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  text: {
    backgroundColor: 'transparent',
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default MyButton;