// ProductCard.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, price, rating, discount, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.discount}>Discount: {discount}%</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    margin: 8,
    width: '100%',
    maxWidth: 160,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;
