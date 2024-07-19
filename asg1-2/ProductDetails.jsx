import React, { useState, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import { CartContext } from './CartContext';

const ProductDetails = ({ product, onBack }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={onBack} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.rating}>Rating: {product.rating}</Text>
      <Text style={styles.discount}>Discount: {product.discount}%</Text>

      <Text style={styles.description}>
        This {product.title} is a high-quality watch, known for its elegance and precision. Crafted with the finest materials, this watch features a {product.specialFeature} that sets it apart from others. Perfect for both casual and formal wear, the {product.title} offers reliability and style.
      </Text>

      <Text style={styles.quantityLabel}>Quantity:</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
        <Text style={styles.quantity}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button title="Add to Cart" onPress={handleAddToCart} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 4,
  },
  discount: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  quantityLabel: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantity: {
    fontSize: 18,
    color: '#FFF',
    marginHorizontal: 8,
  },
  reviewsHeader: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 20,
    marginBottom: 8,
  },
  review: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 4,
  },
});

export default ProductDetails;
