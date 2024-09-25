import { StyleSheet, Text, View } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text>Hi Trailbalzers!</Text>
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
