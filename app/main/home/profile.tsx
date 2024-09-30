import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const onLogOut = async () => {
    await AsyncStorage.removeItem("user");
    signOut();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onLogOut} style={styles.button}>
        <Text style={{ color: "white" }}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#2F4F4F",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
