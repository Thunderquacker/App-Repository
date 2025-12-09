import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";
import { useAuth } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.email}>{user}</Text>

      <SimpleButton title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#000" },
  title: { fontSize: 30, color: "#fff", fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  email: { fontSize: 18, color: "#ccc", textAlign: "center", marginBottom: 20 },
});
