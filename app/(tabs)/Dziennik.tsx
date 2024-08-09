import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku
import TaskItem from '@/components/TaskItem';
import { Button } from 'react-native-paper'; // Importujemy komponent Button z react-native-paper
import TaskEditor from '@/components/TaskEditor';

const initialTasks = [
  // Przykładowe dane zadań
  { id: '1', description: 'Find the lost sword', category: 'Main', dueDate: '2024-09-15', completed: false },
  { id: '2', description: 'Gather herbs for potion', category: 'Side', dueDate: '2024-09-20', completed: false },
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState<any>(null);

  const handleEdit = (task: any) => {
    setEditingTask(task);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderTask = ({ item }: { item: any }) => (
    <TaskItem
      task={item}
      onEdit={() => handleEdit(item)}
      onDelete={() => handleDelete(item.id)}
      onToggleComplete={() => handleToggleComplete(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Button mode="contained" onPress={() => setEditingTask({})} style={styles.addButton}>
        Add Task
      </Button>
      {editingTask && <TaskEditor task={editingTask} onClose={() => setEditingTask(null)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  addButton: {
    marginTop: 20,
  },
});

export default TaskList;
