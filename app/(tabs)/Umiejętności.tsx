import React from 'react';
import { SafeAreaView } from 'react-native';
import SkillManager from '@/components/SkillManager';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SkillManager />
    </SafeAreaView>
  );
};

export default App;