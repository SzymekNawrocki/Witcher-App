// PotionDetails.tsx

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Use 'any' or a more specific type if known, instead of RootStackParamList
type PotionDetailsProps = {
  route: {
    params: {
      type: string; // Directly specify expected params
    };
  };
};

type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
};

const recipes: { [key: string]: Recipe[] } = {
  'Eliksiry na kaca': [
    { id: '1', name: 'Eliksir z Imbirem i Cytryną', ingredients: ['Imbir', 'Cytryna', 'Miód', 'Woda'] },
    { id: '2', name: 'Eliksir z Węgla Aktywowanego', ingredients: ['Węgiel aktywowany', 'Woda', 'Cytryna'] },
  ],
  'Eliksiry na pobudzenie': [
    { id: '3', name: 'Eliksir Kawowy', ingredients: ['Kawa', 'Cynamon', 'Mleko', 'Miód'] },
    { id: '4', name: 'Eliksir z Zieloną Herbatą', ingredients: ['Zielona herbata', 'Cytryna', 'Imbir', 'Miód'] },
  ],
  'Eliksiry na siłę': [
    { id: '5', name: 'Eliksir Proteinowy', ingredients: ['Białko serwatkowe', 'Banany', 'Mleko', 'Miód'] },
    { id: '6', name: 'Eliksir z Jajkami', ingredients: ['Jajka', 'Mleko', 'Wanilia', 'Miód'] },
  ],
  'Eliksiry na uzupełnienie witamin': [
    { id: '7', name: 'Eliksir Owocowy', ingredients: ['Pomarańcza', 'Jabłko', 'Marchew', 'Cytryna'] },
    { id: '8', name: 'Eliksir z Warzywami', ingredients: ['Szpinak', 'Marchew', 'Burak', 'Imbir'] },
  ],
  'Eliksiry na potencję': [
    { id: '9', name: 'Eliksir z Żeń-szeniem', ingredients: ['Żeń-szeń', 'Miód', 'Woda', 'Cytryna'] },
    { id: '10', name: 'Eliksir z Czerwonym Winem', ingredients: ['Czerwone wino', 'Miód', 'Cynamon', 'Goździki'] },
  ],
};

const PotionDetails: React.FC<PotionDetailsProps> = ({ route }) => {
  const { type } = route.params;
  const potionRecipes = recipes[type] || [];

  const renderItem = ({ item }: { item: Recipe }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.ingredients}>Składniki: {item.ingredients.join(', ')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <FlatList
        data={potionRecipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredients: {
    fontSize: 16,
    color: '#555',
  },
});

export default PotionDetails;
