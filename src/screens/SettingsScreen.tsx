import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function SettingsScreen() {
  const [dark, setDark] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 28, color: "#fff", fontWeight: "bold", marginBottom: 30 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 25 },
  text: { color: "#fff", fontSize: 18 }
});
