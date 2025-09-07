import React from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Showcase: undefined;
};

type ShowcaseScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Showcase'
>;

type Props = {
  navigation: ShowcaseScreenNavigationProp;
};

export default function ComponentShowcase({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎉 Component Showcase</Text>

      <Text style={styles.text}>This is a Text component</Text>

      <Image source={require('./assets/logo.png')} style={styles.image} />

      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />

      <View style={{ marginTop: 20 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
