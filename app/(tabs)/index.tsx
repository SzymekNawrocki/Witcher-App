import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, Dimensions } from 'react-native';

const tintColorLight = '#5C2D24';
const tintColorDark = '#D9B580';

export const Colors = {
  light: {
    text: '#D9B580',
    background: '#2F2F2F',
    tint: tintColorLight,
    icon: '#A37A5F',
    tabIconDefault: '#A37A5F',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#1C1C1C',
    tint: tintColorDark,
    icon: '#7A6E52',
    tabIconDefault: '#7A6E52',
    tabIconSelected: tintColorDark,
  },
};

const LandingPage = () => {
  const { width, height } = Dimensions.get('window'); // Pobieramy rozmiar ekranu

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2020/08/06/12/57/character-5467892_1280.jpg' }}
        style={[styles.background, { width, height }]} // Dynamically adjust width and height
        imageStyle={{ opacity: 0.4, resizeMode: 'cover' }} // Adjust the image to cover the screen
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to the Witcher's World</Text>
          <Text style={styles.subtitle}>Monsters, Magic, and Mysteries Await</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end', // Przenosi zawartość na dół
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Ciemny overlay, aby tekst był czytelniejszy
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40, // Margines na dole, aby trochę oddzielić od dolnej krawędzi
  },
  title: {
    fontSize: 32,
    color: Colors.light.text,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.icon,
    textAlign: 'center',
  },
});

export default LandingPage;
