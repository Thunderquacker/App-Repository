import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.png')} style={styles.avatar} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john@example.com</Text>

      <TouchableOpacity style={styles.editButton} onPress={() => alert('Edit profile')}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.playlistButton} onPress={() => navigation.navigate('Playlists')}>
        <Text style={styles.editText}>Go to Playlists</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  email: { color: '#888', marginBottom: 20 },
  editButton: { backgroundColor: '#1DB954', padding: 12, borderRadius: 24, marginBottom: 10 },
  playlistButton: { backgroundColor: '#1DB954', padding: 12, borderRadius: 24 },
  editText: { color: '#fff', fontWeight: 'bold' },
});
