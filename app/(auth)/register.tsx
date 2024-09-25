import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
  };

  return (
    <View style={styles.container}>
        <Text style={styles.backText}>{"<"}</Text>
      <Image
        source={require("../../assets/app.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.textInput}
        value={name}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable onPress={onRegister} style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>

      <Text style={styles.footerText}>I already have an account!</Text>
      <Pressable onPress={() => router.push("/login")}>
        <Text style={styles.loginText}>Log in</Text>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: "#000000",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B4522",
    marginBottom: 40,
  },
  textInput: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "white",
  },
  nextButton: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#0B4522",
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  nextText: {
    color: "white",
    fontSize: 16,
  },
  footerText: {
    color: "#000000",
    marginBottom: 8,
  },
  loginText: {
    color: "#0B4522",
    fontSize: 16,
  },
});
