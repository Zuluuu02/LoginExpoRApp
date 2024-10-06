import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [dataUsage, setDataUsage] = useState('Unlimited');

  const toggleNotifications = () => setNotifications(!notifications);
  const toggleAutoUpdate = () => setAutoUpdate(!autoUpdate);

  const handleDataUsageChange = () => {
    if (dataUsage === 'Unlimited') setDataUsage('Limited');
    else if (dataUsage === 'Limited') setDataUsage('Off');
    else setDataUsage('Unlimited');
  };

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

      <View style={styles.settingItem}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Notifications
        </Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Auto Update
        </Text>
        <Switch
          value={autoUpdate}
          onValueChange={toggleAutoUpdate}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={autoUpdate ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={handleDataUsageChange}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Data Usage
        </Text>
        <Text style={[styles.subText, isDarkMode ? styles.darkText : styles.lightText]}>
          {dataUsage}
        </Text>
      </TouchableOpacity>
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
