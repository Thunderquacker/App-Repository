import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { useThemeColors } from "./src/theme/useTheme";

function ThemedAppContainer() {
  const theme = useThemeColors();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar
        barStyle={theme.mode === "light" ? "dark-content" : "light-content"}
        backgroundColor={theme.background}
      />
      <NavigationContainer>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
          </View>
        }
        persistor={persistor}
      >
        <ThemedAppContainer />
      </PersistGate>
    </Provider>
  );
}
