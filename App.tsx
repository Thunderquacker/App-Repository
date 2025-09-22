import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your screens
import ProfileScreen from '../App/screens/Profile';
import SettingsScreen from './screens/Settings';
import SignUpScreen from './screens/SignUp';
import PlaylistsScreen from './screens/Playlist';

// Define your navigation param list
export type RootStackParamList = {
  Profile: undefined;
  Settings: undefined;
  SignUp: undefined;
  Playlists: undefined;
};

// Create the native stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Example theme
const theme = {
  colors: {
    background: '#000',
    text: '#fff',
    primary: '#1DB954',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({
              navigation,
            }: {
              navigation: NativeStackNavigationProp<RootStackParamList>;
            }) => ({
              headerStyle: { backgroundColor: '#000' },
              headerTintColor: '#1DB954',
              headerTitleStyle: { fontWeight: 'bold' },
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                  <Ionicons name="settings-outline" size={22} color="#1DB954" />
                </TouchableOpacity>
              ),
            })}
          >
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: 'Spotify SignUp' }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: 'Profile' }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ title: 'Settings' }}
            />
            <Stack.Screen
              name="Playlists"
              component={PlaylistsScreen}
              options={{ title: 'Playlists' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
