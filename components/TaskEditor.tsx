import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Modal, Platform } from 'react-native';
import { Colors } from '@/constants/Colors'; 
import { Picker } from '@react-native-picker/picker'; 
import DateTimePicker from '@react-native-community/datetimepicker'; 

interface TaskEditorProps {
  task?: any;
  onClose: () => void;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ task, onClose }) => {
  const [description, setDescription] = useState(task?.description || '');
  const [category, setCategory] = useState(task?.category || 'Main');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    // Save the task logic here
    onClose();
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDueDate(selectedDate.toISOString().split('T')[0]); // Formatowanie daty
    }
  };

  return (
    <Modal transparent={true} visible={true} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{task ? 'Edit Task' : 'Add Task'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={description}
            onChangeText={setDescription}
          />
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Main" value="Main" />
            <Picker.Item label="Side" value="Side" />
            <Picker.Item label="Quest" value="Quest" />
            <Picker.Item label="Contract" value="Contract" />
          </Picker>
          <Button title="Select Due Date" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(dueDate || Date.now())}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Text style={styles.dueDate}>{dueDate ? `Due Date: ${dueDate}` : 'No date selected'}</Text>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color={Colors.light.icon} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: Colors.light.icon,
    borderBottomWidth: 1,
    marginBottom: 10,
    color: Colors.light.text,
  },
  picker: {
    height: 50,
    color: Colors.light.text,
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    marginBottom: 10,
  },
  dueDate: {
    fontSize: 14,
    color: Colors.light.text,
    marginBottom: 10,
  },
});

export default TaskEditor;
