import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Camiseta Rosa', price: 29.99 },
  { id: '2', name: 'Tênis Branco', price: 89.99 },
  { id: '3', name: 'Boné Preto', price: 19.99 },
  { id: '4', name: 'Jaqueta Jeans', price: 129.99 },
  { id: '5', name: 'Mochila Preta', price: 59.99 },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(item)}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const CartScreen = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Carrinho</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Seu carrinho está vazio!</Text>
      ) : (
        cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.name} - ${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => onRemoveFromCart(item)}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartScreen, setIsCartScreen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <View style={styles.container}>
      {isCartScreen ? (
        <CartScreen cart={cart} onRemoveFromCart={removeFromCart} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Lista de Produtos</Text>
          <ProductList onAddToCart={addToCart} />
        </View>
      )}

      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          if (isCartScreen) {
            setIsCartScreen(false); 
          } else {
            setIsCartScreen(true); 
          }
        }}
      >
        <Ionicons 
          name={isCartScreen ? "menu" : "cart"} 
          size={30} 
          color="#fff" 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f8bbd0',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#880e4f',
  },
  productPrice: {
    fontSize: 14,
    color: '#616161',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#D81B60',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#880e4f',
    borderRadius: 30,
    padding: 10,
    zIndex: 10,
  },
  emptyText: {
    fontSize: 18,
    color: '#616161',
    textAlign: 'center',
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f8bbd0',
  },
  cartItemText: {
    fontSize: 16,
    color: '#880e4f',
  },
  removeButton: {
    backgroundColor: '#D81B60',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  totalContainer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f8bbd0',
    width: '100%',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#880e4f',
  },
});
