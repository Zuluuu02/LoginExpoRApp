import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

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

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.yearLevel.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.email}</Text>
      <Text style={styles.cell}>{item.yearLevel}</Text>
      <Text style={styles.cell}>{item.department}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
  
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={[styles.cell, styles.bold]}>Name</Text>
            <Text style={[styles.cell, styles.bold]}>Email</Text>
            <Text style={[styles.cell, styles.bold]}>Year Level</Text>
            <Text style={[styles.cell, styles.bold]}>Department</Text>
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


