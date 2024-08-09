import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ElixirList from '@/components/ElixirList';
import ElixirDetails from '@/components/ElixirDetails';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku

const App = () => {
  const [selectedElixir, setSelectedElixir] = useState<any>(null);

  const handleSelectElixir = (elixir: any) => {
    setSelectedElixir(elixir);
  };

  const handleBack = () => {
    setSelectedElixir(null);
  };

  return (
    <View style={styles.container}>
      {selectedElixir ? (
        <ElixirDetails elixir={selectedElixir} onBack={handleBack} />
      ) : (
        <ElixirList onSelectElixir={handleSelectElixir} />
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


