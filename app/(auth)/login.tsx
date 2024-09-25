import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../context/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("user123");
  const [password, setPassword] = useState("password123");
  const { signIn } = useAuth();

  const onLogin = async () => {
    await AsyncStorage.setItem("user", JSON.stringify({ email, password }));
    signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/app.png')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Welcome to USTP Student Portal</Text>
      <Text style={styles.subtitle}>Home of the Trailblazers</Text>

      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Type email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Type password"
        secureTextEntry
      />

      <Pressable onPress={onLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/register")} style={styles.registerButton}>
        <Text style={styles.registerText}>Create an account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF7F7", 
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2F4F4F", 
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 40,
    color: "#2F4F4F",
    textAlign: "center",
  },
  textInput: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 24,
    marginBottom: 20,
    backgroundColor: "white",
  },
  loginButton: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#0B4522", 
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  loginText: {
    color: "white",
    fontSize: 16,
  },
  registerButton: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "white",
    borderColor: "#0B4522",
    borderWidth: 2,
    borderRadius: 24,
    alignItems: "center",
  },
  registerText: {
    color: "#0B4522", 
    fontSize: 16,
  },
});
