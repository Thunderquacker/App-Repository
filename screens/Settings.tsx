import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logged out')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  label: { color: '#fff', fontSize: 18 },
  logoutButton: { backgroundColor: 'red', padding: 12, borderRadius: 8, marginTop: 30 },
  logoutText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
