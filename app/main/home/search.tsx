import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

const students = [
  { name: "Xyrille Uy", email: "xyrilleuy@gmail.com", yearLevel: "Senior", department: "Computer Science" },
  { name: "Jane Lopez", email: "jane@gmail.com", yearLevel: "Junior", department: "Information Technology" },
  { name: "Michael Jorban", email: "michael@gmail.com", yearLevel: "Sophomore", department: "Mechanical Engineering" },
  { name: "Emily Willis", email: "emily@gmail.com", yearLevel: "Freshman", department: "Electric Engineering" },
  { name: "Alyssa Reyes", email: "alyssa.reyes@ustp.edu.ph", yearLevel: "Senior", department: "Civil Engineering" },
  { name: "John Cruz", email: "john.cruz@ustp.edu.ph", yearLevel: "Junior", department: "Computer Science" },
  { name: "Maria Garcia", email: "maria.garcia@ustp.edu.ph", yearLevel: "Sophomore", department: "Information Technology" },
  { name: "Mark Dela Cruz", email: "mark.dc@ustp.edu.ph", yearLevel: "Freshman", department: "Architecture" },
  { name: "Sophia Bautista", email: "sophia.b@ustp.edu.ph", yearLevel: "Senior", department: "Business Administration" },
  { name: "James Ong", email: "james.ong@ustp.edu.ph", yearLevel: "Junior", department: "Electronics Engineering" },
  { name: "Patricia Lim", email: "patricia.lim@ustp.edu.ph", yearLevel: "Sophomore", department: "Industrial Engineering" },
  { name: "Carlos Tan", email: "carlos.tan@ustp.edu.ph", yearLevel: "Freshman", department: "Mathematics" },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useTheme();

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.yearLevel.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <View style={[styles.row, { borderBottomColor: isDarkMode ? '#666' : '#ddd' }]}>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.name}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.email}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.yearLevel}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.department}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <TextInput
        style={[styles.searchBar, { 
          color: isDarkMode ? '#fff' : '#000',
          borderColor: isDarkMode ? '#666' : '#ddd',
          backgroundColor: isDarkMode ? '#444' : '#fff'
        }]}
        placeholder="Search..."
        placeholderTextColor={isDarkMode ? '#aaa' : '#999'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={[styles.header, { backgroundColor: isDarkMode ? '#444' : '#f0f0f0' }]}>
            <Text style={[styles.cell, styles.bold, { color: isDarkMode ? '#fff' : '#000' }]}>Name</Text>
            <Text style={[styles.cell, styles.bold, { color: isDarkMode ? '#fff' : '#000' }]}>Email</Text>
            <Text style={[styles.cell, styles.bold, { color: isDarkMode ? '#fff' : '#000' }]}>Year Level</Text>
            <Text style={[styles.cell, styles.bold, { color: isDarkMode ? '#fff' : '#000' }]}>Department</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});