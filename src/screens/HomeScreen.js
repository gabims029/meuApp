import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from "../axios/axios";

export default function HomeScreen({navigation}) {

  return(
    <View style={styles.container}>
        <Button title="Cadastro Organizador" onPress={()=> navigation.navigate("CadastroOrganizador")}/>
        <Button title="Cadastro Evento" onPress={()=> navigation.navigate("CadastroEvento")}/>
        <Button title="Cadastro Ingresso" onPress={()=> navigation.navigate("CadastroIngresso")}/>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize:28,
    fontWeight: 'bold'
  },
  input:{
    width:'100%',
    height:40,
    borderBottomWidth:1,
    marginBottom:20,
    paddingHorizontal:10
  },
  button:{
    backgroundColor:'royalblue',
    padding:10,
    borderRadius:5
  }
});
