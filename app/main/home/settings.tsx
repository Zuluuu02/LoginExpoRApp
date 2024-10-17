import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ScrollView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <View style={styles.settingItem}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  subText: {
    fontSize: 16,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
});

export default Settings;
