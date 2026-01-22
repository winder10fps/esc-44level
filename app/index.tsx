import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./constants/ui";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  }
})
