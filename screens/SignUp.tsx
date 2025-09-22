import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spotify Sign Up</Text>

      <TextInput placeholder="Email" placeholderTextColor="#888" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="#888" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput placeholder="Username" placeholderTextColor="#888" style={styles.input} value={username} onChangeText={setUsername} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Profile')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 20 },
  title: { color: '#1DB954', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#121212', color: '#fff', padding: 12, borderRadius: 8, marginBottom: 12 },
  button: { backgroundColor: '#1DB954', padding: 15, borderRadius: 24, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
