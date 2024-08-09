import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku

interface MonsterDetailsProps {
  monster: any;
  onBack: () => void;
}

const MonsterDetails: React.FC<MonsterDetailsProps> = ({ monster, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onBack}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={{ uri: monster.image }} style={styles.image} />
      <Text style={styles.name}>{monster.name}</Text>
      <Text style={styles.category}>{monster.category}</Text>
      <Text style={styles.description}>{monster.description}</Text>
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
  category: {
    fontSize: 18,
    color: Colors.light.icon,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: Colors.dark.text,
  },
});

export default MonsterDetails;
