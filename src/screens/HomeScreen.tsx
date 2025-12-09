import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user || "User"} 👋</Text>

      <View style={styles.btnBox}>
        <SimpleButton
          title="Go to Playlist"
          onPress={() => navigation.navigate("Playlist")}
        />
        <SimpleButton
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <SimpleButton
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <SimpleButton
          title="Logout"
          onPress={logout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center"
  },
  btnBox: {
    width: "100%",
    gap: 15
  }
});
