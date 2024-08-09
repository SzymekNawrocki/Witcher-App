import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Bestiariusz"
        options={{
          title: 'Bestiariusz',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Dziennik"
        options={{
          title: 'Dziennik',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Umiejętności"
        options={{
          title: 'Umiejętności',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Eliksiry"
        options={{
          title: 'Eliksiry',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flask' : 'flask-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
