import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Animated, StyleSheet } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Profile from './Profile';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import { CartProvider } from './CartContext';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnimation = useState(new Animated.Value(-250))[0];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(slideAnimation, {
      toValue: menuVisible ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen setCurrentScreen={setCurrentScreen} />;
      case 'Login':
        return <LoginScreen />;
      case 'Register':
        return <RegisterScreen />;
      case 'Profile':
        return <Profile />;
      case 'ProductList':
        return <ProductList />;
      case 'CartSummary':
        return <CartSummary />;
      default:
        return <WelcomeScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <CartProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.navbarButton}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('CartSummary')}>
            <Text style={styles.navbarButton}>Cart</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnimation }] }]}>
          <TouchableOpacity onPress={() => { setCurrentScreen('Profile'); toggleMenu(); }}>
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrentScreen('ProductList'); toggleMenu(); }}>
            <Text style={styles.menuItem}>Product List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrentScreen('Register'); toggleMenu(); }}>
            <Text style={styles.menuItem}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrentScreen('Login'); toggleMenu(); }}>
            <Text style={styles.menuItem}>Login</Text>
          </TouchableOpacity>
        </Animated.View>

        {menuVisible && <View style={styles.overlay} />}

        <View style={styles.box}>
          {renderScreen()}
        </View>
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  navbarButton: {
    fontSize: 18,
    color: '#007AFF',
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
    zIndex: 10,
    elevation: 10,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
  },
  box: {
    flex: 1,
  },
});

export default App;
