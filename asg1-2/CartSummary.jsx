import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const CartSummary = ({ onCheckout }) => {
    const { cartItems } = useContext(CartContext);
    
    const calculateTotal = () => {
        if (!cartItems) return 0; // Guard against undefined cartItems
        return cartItems.reduce((total, item) => {
            return total + parseInt(item.price.replace(' VP', '')) * item.quantity;
        }, 0);
    };

    const totalAmount = calculateTotal();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cart Summary</Text>
            {cartItems.length === 0 ? (
                <Text style={styles.empty}>Your cart is empty.</Text>
            ) : (
                cartItems.map(item => (
                    <View key={item.id} style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    </View>
                ))
            )}
            <Text style={styles.total}>Total: {totalAmount} VP</Text>
            <Button title="Checkout" onPress={onCheckout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    header: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        color: '#FFF',
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    quantity: {
        fontSize: 16,
        color: '#FFF',
    },
    total: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 20,
        fontWeight: 'bold',
    },
    empty: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default CartSummary;
