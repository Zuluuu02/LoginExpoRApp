import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { emailValidator } from "../helpers/emailValidator"; 
import { passwordValidator } from "../helpers/passwordValidator"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { nameValidator } from "../helpers/nameValidator";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onRegister = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(name.value); 

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      await AsyncStorage.setItem('userEmail', email.value);
      await AsyncStorage.setItem('userPassword', password.value);
      console.log('User credentials stored');
      router.push("/home");
    } catch (e) {
      console.error('Failed to save credentials');
    }
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
        value={name.value}
        placeholder="Name"
        onChangeText={(text) => setName({ value: text, error: "" })}
      />
      {name.error ? <Text style={styles.errorText}>{name.error}</Text> : null}

      <TextInput
        style={styles.textInput}
        value={email.value}
        placeholder="Email"
        onChangeText={(text) => setEmail({ value: text, error: "" })}
      />
      {email.error ? <Text style={styles.errorText}>{email.error}</Text> : null}

      <TextInput
        style={styles.textInput}
        value={password.value}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword({ value: text, error: "" })}
      />
      {password.error ? <Text style={styles.errorText}>{password.error}</Text> : null}

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
  errorText: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});
