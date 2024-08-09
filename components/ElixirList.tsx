import React from 'react';
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku

interface ElixirListProps {
  onSelectElixir: (elixir: any) => void;
}

const ElixirList: React.FC<ElixirListProps> = ({ onSelectElixir }) => {
  const elixirs = [
    // Przykładowe dane eliksirów
    { id: '1', name: 'Elixir of Life', image: 'https://example.com/elixir1.jpg', description: 'Restores health.' },
    { id: '2', name: 'Potion of Invisibility', image: 'https://example.com/elixir2.jpg', description: 'Grants temporary invisibility.' },
    // Dodaj więcej eliksirów tutaj
  ];

  const renderElixir = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.elixirItem} onPress={() => onSelectElixir(item)}>
      <Image source={{ uri: item.image }} style={styles.elixirImage} />
      <View style={styles.textContainer}>
        <Text style={styles.elixirName}>{item.name}</Text>
        <Text style={styles.elixirDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={elixirs}
      renderItem={renderElixir}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  elixirItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
    overflow: 'hidden',
  },
  elixirImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  elixirName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  elixirDescription: {
    fontSize: 14,
    color: Colors.light.icon,
  },
});

export default ElixirList;
