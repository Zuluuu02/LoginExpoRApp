import { StyleSheet, Text, View } from "react-native";

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text>Notification Ni</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
