import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

const GradesContext = createContext({
  memoizedGrades: [],
  loading: true,
});

const sampleGradesData = [
  { id: '1', code: "IT211", descriptive: "Intro to Human Computer Interaction", units: 3, section: "IT2R6", midterm: 2.50, final: 2.00, reExam: "N/A", status: "Passed" },
  { id: '2', code: "IT212", descriptive: "Fundamentals of Database Systems", units: 3, section: "IT2R6", midterm: 2.00, final: 2.00, reExam: "N/A", status: "Passed" },
  { id: '3', code: "IT213", descriptive: "Platform Technologies", units: 3, section: "IT2R6", midterm: 2.00, final: 1.75, reExam: "N/A", status: "Passed" },
  { id: '4', code: "IT214", descriptive: "Object Oriented Programming", units: 3, section: "IT2R6", midterm: 2.50, final: 2.00, reExam: "N/A", status: "Passed" },
  { id: '5', code: "IT215", descriptive: "Accounting Principles", units: 3, section: "IT2R6", midterm: 2.75, final: 1.00, reExam: "N/A", status: "Passed" },
  { id: '6', code: "PATH FIT 3", descriptive: "Physical Activity Towards Health and Fitness 1", units: 2, section: "IT2R6", midterm: 1.00, final: 2.75, reExam: "N/A", status: "Passed" },
  { id: '7', code: "EnviSci", descriptive: "Environmental Science", units: 3, section: "IT2R6", midterm: 2.75, final: 2.00, reExam: "N/A", status: "Passed" },
];

const GradesProvider = ({ children }) => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGrades(sampleGradesData);
      setLoading(false);
    }, 1000);
  }, []);

  const memoizedGrades = useMemo(() => grades, [grades]);

  return (
    <GradesContext.Provider value={{ memoizedGrades, loading }}>
      {children}
    </GradesContext.Provider>
  );
};

export default function App() {
  return (
    <GradesProvider>
      <Grades />
    </GradesProvider>
  );
}

function Grades() {
  const { memoizedGrades, loading } = useContext(GradesContext);
  const { isDarkMode } = useTheme();

  const renderItem = ({ item }) => (
    <View style={[styles.row, { borderBottomColor: isDarkMode ? '#666' : '#ddd' }]}>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.code}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.descriptive}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.units}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.section}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.midterm}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.final}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.reExam}</Text>
      <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>{item.status}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Loading grades...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Report of Grades</Text>
      <FlatList
        data={memoizedGrades}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={[styles.header, { backgroundColor: isDarkMode ? '#444' : '#f0f0f0' }]}>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Code</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Descriptive</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Units</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Section</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Midterm</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Final</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Re-Exam</Text>
            <Text style={[styles.cell, { color: isDarkMode ? '#fff' : '#000' }]}>Status</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
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
});