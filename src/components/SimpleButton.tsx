import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

export default function SimpleButton({title,onPress}:any){
  return(
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
  btn:{backgroundColor:"#1DB954",padding:16,borderRadius:30,marginTop:10},
  text:{color:"#000",fontWeight:"bold",textAlign:"center",fontSize:16}
});
