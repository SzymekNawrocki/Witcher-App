import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku

interface ElixirDetailsProps {
  elixir: any;
  onBack: () => void;
}

const ElixirDetails: React.FC<ElixirDetailsProps> = ({ elixir, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onBack}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={{ uri: elixir.image }} style={styles.image} />
      <Text style={styles.name}>{elixir.name}</Text>
      <Text style={styles.description}>{elixir.description}</Text>
      <Text style={styles.recipeTitle}>Receptura:</Text>
      <Text style={styles.recipe}>{elixir.recipe}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.dark.background,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: Colors.light.tint,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: Colors.dark.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  recipeTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  recipe: {
    fontSize: 16,
    color: Colors.dark.text,
    marginTop: 10,
  },
});

export default ElixirDetails;
