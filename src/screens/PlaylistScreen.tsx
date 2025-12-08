import React from "react";
import { View,Text,FlatList,TouchableOpacity,StyleSheet } from "react-native";

const playlists=[
  {id:"1",name:"Liked Songs"},
  {id:"2",name:"Workout"},
  {id:"3",name:"Chill Mix"},
];

export default function PlaylistScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>

      <FlatList
        data={playlists}
        keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:"#000",padding:20},
  title:{color:"#fff",fontSize:30,fontWeight:"bold",marginBottom:20},
  card:{padding:18,backgroundColor:"#111",borderRadius:8,marginBottom:12},
  text:{color:"#fff",fontSize:18}
});
