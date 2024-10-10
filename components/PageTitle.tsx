// components/PageTitle.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'; // Upewnij się, że ścieżka jest poprawna

interface PageTitleProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, style, textStyle }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme || 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }, style]}>
      <Text style={[styles.title, { color: colors.text }, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PageTitle;
