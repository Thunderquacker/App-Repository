import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password)
      return Alert.alert("Missing Fields", "Fill all fields.");
    login(email);
  };

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        {/* Logo / title like Spotify */}
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

          <TouchableOpacity style={styles.forgotWrapper}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <SimpleButton
            title="Sign In"
            onPress={handleLogin}
            style={styles.primaryButton}
            textStyle={styles.primaryButtonText}
          />

          <Text style={styles.connectText}>Be Connect With</Text>
          <View style={styles.socialRow}>
            <View style={styles.socialCircle}>
              <Text style={styles.socialText}>f</Text>
            </View>
            <View style={styles.socialCircle}>
              <Text style={styles.socialText}>G</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.bottomLink}>
              Don't have an account? <Text style={styles.bottomLinkHighlight}>Sign Up</Text>
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
  forgotWrapper: {
    alignItems: "flex-end",
    marginTop: 8,
    marginBottom: 24
  },
  forgotText: {
    color: "#b3b3b3",
    fontSize: 13
  },
  primaryButton: {
    backgroundColor: "#1DB954",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginBottom: 20
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  },
  connectText: {
    color: "#b3b3b3",
    textAlign: "center",
    marginBottom: 10
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 18
  },
  socialCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  socialText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
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
