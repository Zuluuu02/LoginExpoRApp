import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../context/auth";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator"; 

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const { signIn } = useAuth();

  const onLogin = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    await AsyncStorage.setItem("user", JSON.stringify({ email: email.value, password: password.value }));
    signIn({ email: email.value, password: password.value });
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
        value={email.value}
        placeholder="Type email"
        onChangeText={(text) => setEmail({ value: text, error: '' })}
      />
      {email.error ? <Text style={styles.errorText}>{email.error}</Text> : null}

      <TextInput
        style={styles.textInput}
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        placeholder="Type password"
        secureTextEntry
      />
      {password.error ? <Text style={styles.errorText}>{password.error}</Text> : null}

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
  errorText: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});
