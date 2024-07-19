import React, { useState } from 'react';
import { View, FlatList, Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const ProductList = () => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: '1', title: 'Rolex Submariner', price: "$9,000", rating: 4.9, discount: 5, image: 'https://www.watchaser.com/cdn/shop/products/m126618lb-0002_013_grande.webp?v=1675510757' },
    { id: '2', title: 'Omega Seamaster', price: "$5,500", rating: 4.8, discount: 10, image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-210-30-44-51-03-001-large.jpg' },
    { id: '3', title: 'Tag Heuer Carrera', price: "$4,800", rating: 4.7, discount: 8, image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/a/tag-heuer-carrera-cbn201c-fc6542-large.jpg' },
    { id: '4', title: 'Audemars Piguet Royal Oak', price: "$15,000", rating: 4.9, discount: 12, image: 'https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/a/u/audemars-piguet-royal-oak-15400st-oo-1220st-02-powg19a-large.jpg' },
    { id: '5', title: 'Patek Philippe Nautilus', price: "$30,000", rating: 5.0, discount: 15, image: 'https://www.watchaser.com/cdn/shop/products/5811_1G_001_1_2x_003_800x.jpg?v=1676215077' },
    { id: '6', title: 'Breitling Navitimer', price: "$7,000", rating: 4.6, discount: 7, image: 'https://www.breitling.com/multimedia/images/configurator2011/images_dynamic/jpg/site/FFFFFF/asset-version-bec74381e5/AB013721-CA99-463A.jpg' },
    { id: '7', title: 'IWC Portugieser', price: "$12,000", rating: 4.8, discount: 10, image: 'https://artoftimeindia.com/cdn/shop/products/IW503302.jpg?v=1603468240' },
    { id: '8', title: 'Cartier Tank', price: "$6,000", rating: 4.5, discount: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oTONWNCcbf-cdCkOkztDce5t0SVE5TzBhg&s' },
    { id: '9', title: 'Jaeger-LeCoultre Reverso', price: "$11,000", rating: 4.7, discount: 9, image: 'https://artoftimeindia.com/cdn/shop/files/Q389257J1_800x.jpg?v=1705398181' },
    { id: '10', title: 'Hublot Big Bang', price: "$13,000", rating: 4.9, discount: 8, image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/2a50063f4776979c2a938462c3a0aee4/h/u/hublot-big-bang-421-ox-1180-rx.jpg' },
  ];

  const toggleLayout = () => {
    setIsSingleColumn(!isSingleColumn);
  };

  const renderProductDetails = () => (
    <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
  );

  return (
    <SafeAreaView style={styles.container}>
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
          initialNumToRender={10} // Adjust based on your preference
          maxToRenderPerBatch={10} // Adjust based on your preference
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
