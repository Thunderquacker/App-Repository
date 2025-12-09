import React from "react";
import { TextInput,StyleSheet } from "react-native";

export default function InputField(props:any){
  return <TextInput placeholderTextColor="#555" style={styles.input} {...props}/>;
}

const styles=StyleSheet.create({
  input:{backgroundColor:"#111",padding:14,borderRadius:8,color:"#fff",marginBottom:15,fontSize:16}
});
