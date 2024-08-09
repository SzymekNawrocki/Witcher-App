import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MonsterList from '@/components/MonsterList';
import MonsterDetails from '@/components/MonsterDetails';
import { Colors } from '@/constants/Colors'; 

const App = () => {
  const [selectedMonster, setSelectedMonster] = useState<any>(null);

  const handleSelectMonster = (monster: any) => {
    setSelectedMonster(monster);
  };

  const handleBack = () => {
    setSelectedMonster(null);
  };

  return (
    <View style={styles.container}>
      {selectedMonster ? (
        <MonsterDetails monster={selectedMonster} onBack={handleBack} />
      ) : (
        <MonsterList onSelectMonster={handleSelectMonster} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});

export default App;
