  import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

  export default function HomeLayout() {
    const { isDarkMode } = useTheme();

    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: isDarkMode ? "#81b0ff" : "#2F4F4F",
          tabBarStyle: {
            backgroundColor: isDarkMode ? "#333" : "#fff",
          },
          tabBarInactiveTintColor: isDarkMode ? "#888" : "#999",
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="grades"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    );
  }
