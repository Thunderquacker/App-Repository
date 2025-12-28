import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";
import { useThemeColors } from "../theme/useTheme";

export default function SignupScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useThemeColors();

  const handleSignup = () => {
    if (!email || !password) {
      return Alert.alert("Missing Fields", "Fill all fields.");
    }
    Alert.alert("Success", "Account created!");
    navigation.navigate("Login");
  };

  return (
    <View
      style={[
        styles.root,
        { backgroundColor: theme.accentColor },
      ]}
    >
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text
          style={[
            styles.logoCircle,
            { backgroundColor: theme.accentColor, color: "#000" },
          ]}
        >
          S
        </Text>
        <Text style={[styles.appTitle, { color: theme.text }]}>Spotify</Text>

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
            <Text style={[styles.bottomLink, { color: theme.text }]}>
              Already have an account?{" "}
              <Text
                style={[
                  styles.bottomLinkHighlight,
                  { color: theme.accentColor },
                ]}
              >
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: 16 }}>
            <SimpleButton title="Back" onPress={() => navigation.goBack()} />
            <SimpleButton
              title="Go Home"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    marginTop: 10,
  },
  primaryButton: {
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomLink: {
    textAlign: "center",
    fontSize: 13,
  },
  bottomLinkHighlight: {
    fontWeight: "bold",
  },
});
