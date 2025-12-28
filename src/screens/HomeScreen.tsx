import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";
import { useAuth } from "../context/AuthContext";
import { useThemeColors } from "../theme/useTheme";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useAuth();
  const theme = useThemeColors();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        { backgroundColor: theme.background },
      ]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Welcome, {user || "User"} 👋
      </Text>

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
        <SimpleButton title="Logout" onPress={logout} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  btnBox: {
    width: "100%",
    gap: 15,
  },
});
