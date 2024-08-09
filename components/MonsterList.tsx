import React from 'react';
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { monsters } from '@/constants/Data'; // Upewnij się, że ścieżka jest poprawna
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku

interface MonsterListProps {
  onSelectMonster: (monster: any) => void;
}

const MonsterList: React.FC<MonsterListProps> = ({ onSelectMonster }) => {
  const renderMonster = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.monsterItem} onPress={() => onSelectMonster(item)}>
      <Image source={{ uri: item.image }} style={styles.monsterImage} />
      <View style={styles.textContainer}>
        <Text style={styles.monsterName}>{item.name}</Text>
        <Text style={styles.monsterCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={monsters}
      renderItem={renderMonster}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  monsterItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
    overflow: 'hidden',
  },
  monsterImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  monsterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  monsterCategory: {
    fontSize: 14,
    color: Colors.light.icon,
  },
});

export default MonsterList;
