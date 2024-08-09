import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors'; // Załaduj kolory z odpowiedniego pliku
import { Checkbox } from 'react-native-paper'; // Komponent Checkbox z react-native-paper

interface TaskItemProps {
  task: any;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <View style={styles.item}>
      <Checkbox
        status={task.completed ? 'checked' : 'unchecked'}
        onPress={onToggleComplete}
        color={Colors.light.tint}
      />
      <View style={styles.details}>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={styles.category}>{task.category}</Text>
        <Text style={styles.dueDate}>{task.dueDate}</Text>
      </View>
      <TouchableOpacity onPress={onEdit} style={styles.button}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
    padding: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.light.text,
  },
  category: {
    fontSize: 14,
    color: Colors.light.icon,
  },
  dueDate: {
    fontSize: 12,
    color: Colors.light.icon,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: Colors.light.tint,
  },
});

export default TaskItem;
