import React, { useState } from 'react';
import { View, FlatList, Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { Video } from 'react-native';

const ProductList = () => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: '1', title: 'Kuronami Vandal', price: "2375 VP", rating: 4.5, discount: 10, image: 'https://cdn.gameboost.com/accounts/88982/gallery/conversions/a5a796f5-bc6c-425e-90b0-ea18248c5941-webp.webp?v=1716676719' },
    { id: '2', title: 'Ruination Phantom', price: "2175 VP", rating: 4.0, discount: 5, image: 'https://valorantstrike.com/wp-content/uploads/2021/07/Valorant-Ruination-Phantom-Green-Article.jpg' },
    { id: '3', title: 'Oni Phantom', price: "2275 VP", rating: 4.8, discount: 15, image: 'https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Oni-Collection-Phantom-HD.jpg' },
    { id: '4', title: 'Elderflame Vandal', price: "2675 VP", rating: 4.7, discount: 20, image: 'https://images.1v9.gg/elderflame%20vandal-a11dfb7a2d86.webp' },
    { id: '5', title: 'Sovereign Ghost', price: "1875 VP", rating: 4.6, discount: 10, image: 'https://dotesports.com/wp-content/uploads/2023/06/Sovereign_Ghost.png?w=640' },
    { id: '6', title: 'Ion Sheriff', price: "1775 VP", rating: 4.9, discount: 15, image: 'https://valorantstrike.com/wp-content/uploads/2020/11/Valorant-Ion-Collection-Sheriff-HD.jpg' },
    { id: '7', title: 'Reaver Operator', price: "4500 VP", rating: 4.8, discount: 20, image: 'https://valorantstrike.com/wp-content/uploads/2020/11/Valorant-Reaver-Collection-Operator-Red-Variant.jpg' },
    { id: '8', title: 'Glitchpop Odin', price: "3200 VP", rating: 4.5, discount: 10, image: 'https://valorantstrike.com/wp-content/uploads/2020/08/Valorant-Glitchpop-Collection-Odin-HD.jpg' },
    { id: '9', title: 'Reaver Karambit', price: "3500 VP", rating: 5.0, discount: 25, image: 'https://valorantstrike.com/wp-content/uploads/Valorant-Reaver-2-Collection-Karambit-Small.jpg' },
    { id: '10', title: 'Prime Classic', price: "2000 VP", rating: 5.0, discount: 25, image: 'https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Prime-Classic-Blue-Variant-2.jpg' },
  ];

  const toggleLayout = () => {
    setIsSingleColumn(!isSingleColumn);
  };

  const renderProductDetails = () => (
    <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require('C:\Users\murar\OneDrive\Desktop\video')}
        style={styles.video}
        resizeMode="cover"
        repeat
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Product List</Text>
        <Button title="Toggle Layout" onPress={toggleLayout} />
      </View>
      {selectedProduct ? (
        renderProductDetails()
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={isSingleColumn ? 1 : 2}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              rating={item.rating}
              discount={item.discount}
              image={item.image}
              onPress={() => setSelectedProduct(item)}
            />
          )}
          key={isSingleColumn ? 'ONE_COLUMN' : 'TWO_COLUMNS'}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    padding: 8,
  },
});

export default ProductList;
