import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

// Definicje typów
interface Skill {
  id: string;
  title: string;
  description: string;
  level: string;
  completed: boolean;
}

const SkillManager: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkillTitle, setNewSkillTitle] = useState<string>('');
  const [newSkillDescription, setNewSkillDescription] = useState<string>('');
  const [newSkillLevel, setNewSkillLevel] = useState<string>('Amator');
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  const levels: string[] = ['Amator', 'Początkujący', 'Adept', 'Średniozaawansowany', 'Mistrz'];

  const addSkill = () => {
    if (newSkillTitle && newSkillDescription) {
      const skill: Skill = {
        id: Math.random().toString(),
        title: newSkillTitle,
        description: newSkillDescription,
        level: newSkillLevel,
        completed: false, // Initialize as not completed
      };

      if (editingSkill) {
        // Aktualizuj istniejącą umiejętność
        setSkills(skills.map(s => (s.id === editingSkill.id ? skill : s)));
        setEditingSkill(null);
      } else {
        // Dodaj nową umiejętność
        setSkills([...skills, skill]);
      }

      // Resetuj pola formularza
      setNewSkillTitle('');
      setNewSkillDescription('');
      setNewSkillLevel('Amator');
    }
  };

  const editSkill = (skill: Skill) => {
    setEditingSkill(skill);
    setNewSkillTitle(skill.title);
    setNewSkillDescription(skill.description);
    setNewSkillLevel(skill.level);
  };

  const deleteSkill = (skillId: string) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };

  const toggleSkillCompletion = (skillId: string) => {
    setSkills(skills.map(skill => (
      skill.id === skillId ? { ...skill, completed: !skill.completed } : skill
    )));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zarządzanie Umiejętnościami</Text>
      <TextInput
        style={styles.input}
        placeholder="Tytuł Umiejętności"
        placeholderTextColor={Colors.light.text}
        value={newSkillTitle}
        onChangeText={setNewSkillTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Opis Umiejętności"
        placeholderTextColor={Colors.light.text}
        value={newSkillDescription}
        onChangeText={setNewSkillDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Poziom (Amator, Początkujący, etc.)"
        placeholderTextColor={Colors.light.text}
        value={newSkillLevel}
        onChangeText={setNewSkillLevel}
      />
      <Button
        title={editingSkill ? "Aktualizuj Umiejętność" : "Dodaj Umiejętność"}
        onPress={addSkill}
        color={Colors.light.tint}
      />

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={[styles.skillTitle, item.completed && styles.completedSkill]}>
              {item.title}
            </Text>
            <Text style={styles.skillDescription}>{item.description}</Text>
            <Text style={styles.skillLevel}>Poziom: {item.level}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => editSkill(item)}>
                <Text style={styles.editButton}>Edytuj</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => deleteSkill(item.id)}>
                <Text style={styles.deleteButton}>Usuń</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => toggleSkillCompletion(item.id)}>
                <Text style={styles.completeButton}>{item.completed ? 'Oznacz jako nieukończone' : 'Ukończone'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: Colors.light.icon,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: Colors.light.text,
  },
  skillItem: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  skillDescription: {
    color: Colors.light.text,
  },
  skillLevel: {
    color: Colors.light.text,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.light.text,
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  editButton: {
    color: Colors.light.icon,
  },
  deleteButton: {
    color: 'red',
  },
  completeButton: {
    color: 'green',
  },
  completedSkill: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default SkillManager;
