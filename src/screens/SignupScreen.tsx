import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";

export default function SignupScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      return Alert.alert("Missing Fields", "Fill all fields.");
    }
    Alert.alert("Success", "Account created!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        {/* Logo + app name */}
        <Text style={styles.logoCircle}>S</Text>
        <Text style={styles.appTitle}>Spotify</Text>

        <View style={styles.form}>
          <InputField
            placeholder="Username"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#b3b3b3"
          />
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#b3b3b3"
          />

          <SimpleButton
            title="Sign Up"
            onPress={handleSignup}
            style={styles.primaryButton}
            textStyle={styles.primaryButtonText}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.bottomLink}>
              Already have an account?{" "}
              <Text style={styles.bottomLinkHighlight}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "85%",
    borderRadius: 30,
    backgroundColor: "#000",
    paddingVertical: 40,
    paddingHorizontal: 24
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1DB954",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    marginBottom: 10
  },
  appTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  },
  form: {
    marginTop: 10
  },
  primaryButton: {
    backgroundColor: "#1DB954",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  },
  bottomLink: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13
  },
  bottomLinkHighlight: {
    color: "#1DB954",
    fontWeight: "bold"
  }
});
