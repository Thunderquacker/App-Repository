import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const playlists = [
  { id: '1', title: 'Top Hits', image: require('../assets/playlist1.png') },
  { id: '2', title: 'Chill Vibes', image: require('../assets/playlist2.png') },
  { id: '3', title: 'Workout', image: require('../assets/playlist3.png') },
];

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 10 },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 64, height: 64, borderRadius: 8, marginRight: 12 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
