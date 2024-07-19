import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CartContext } from './CartContext';

const Cart = ({ onBack }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Button title="Back to Products" onPress={onBack} />
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        cartItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  empty: {
    color: '#FFF',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    width: '100%',
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#666',
  },
});

export default Cart;
