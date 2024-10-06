import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, UserCredentials } from "../context/auth";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loadedUser, setLoadedUser] = useState<UserCredentials | null>(null);

  const getUserFromStorage = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setLoadedUser(JSON.parse(user));
    }
    setIsReady(true);
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);

  if (!isReady)
    return (
      <View style={styles.loading}>
        <Text>LOADING...</Text>
      </View>
    );

  return (
    <ThemeProvider>
      <Provider userCredentials={loadedUser}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
