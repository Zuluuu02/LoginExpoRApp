import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

export default function Feed() {
  const { isDarkMode } = useTheme();
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(""); 

  const addTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: task }, 
      ]);
      setTask(""); 
    }
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={[styles.taskContainer, { borderBottomColor: isDarkMode ? '#666' : '#ccc' }]}>
      <Text style={[styles.task, { color: isDarkMode ? '#fff' : '#000' }]}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>TASK NOTE REMINDER</Text>
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ddd' }]}
        placeholder="Add a new task..."
        placeholderTextColor={isDarkMode ? '#aaa' : '#999'}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  list: {
    marginTop: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  task: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: "#FF6347", 
    padding: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#2F4F4F", 
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
