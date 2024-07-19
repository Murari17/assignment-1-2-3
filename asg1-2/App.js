import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Animated, StyleSheet } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Profile from './Profile';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import { CartProvider } from './CartContext';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnimation = useState(new Animated.Value(-250))[0];

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
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
        return <LoginScreen setCurrentScreen={setCurrentScreen} />;
      case 'Register':
        return <RegisterScreen setCurrentScreen={setCurrentScreen} />;
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    position: 'absolute',
    top: 40,
    zIndex: 10,
  },
  navbarButton: {
    color: '#FFF',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 60,
    bottom: 0,
    width: 250,
    backgroundColor: '#333',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 10,
  },
  menuItem: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9,
  },
  box: {
    flex: 1,
    marginTop: 60,
  },
});

export default App;
