import React, { useState, useEffect, useContext, createContext, useMemo } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

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

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.code}</Text>
      <Text style={styles.cell}>{item.descriptive}</Text>
      <Text style={styles.cell}>{item.units}</Text>
      <Text style={styles.cell}>{item.section}</Text>
      <Text style={styles.cell}>{item.midterm}</Text>
      <Text style={styles.cell}>{item.final}</Text>
      <Text style={styles.cell}>{item.reExam}</Text>
      <Text style={styles.cell}>{item.status}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading grades...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report of Grades</Text>
      <FlatList
        data={memoizedGrades}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.cell}>Code</Text>
            <Text style={styles.cell}>Descriptive</Text>
            <Text style={styles.cell}>Units</Text>
            <Text style={styles.cell}>Section</Text>
            <Text style={styles.cell}>Midterm</Text>
            <Text style={styles.cell}>Final</Text>
            <Text style={styles.cell}>Re-Exam</Text>
            <Text style={styles.cell}>Status</Text>
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
