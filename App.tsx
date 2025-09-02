// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import SignUpLogin from './SignUpLogin';
import ComponentShowcase from './ComponentShowcase';

export type RootStackParamList = {
  SignUpLogin: undefined;   // Login/Signup
  App: undefined;           // Main app (after login)
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpLogin">
        {/* Login / Signup page */}
        <Stack.Screen
          name="SignUpLogin"
          component={SignUpLogin}
          options={{ headerShown: false }}
        />

        {/* After login → Main App page */}
        <Stack.Screen
          name="App"
          component={ComponentShowcase}
          options={{ title: 'My App', headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
