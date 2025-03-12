import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from "../axios/axios";

export default function CadastroOrganizador({navigation}) {
  const [organizador, setUser] = useState({
    telefone: "",
    email: "",
    senha:"",
    nome:"",
  });

  async function handleCadastroOrganizadorScreen(){
    await api.postCadastroOrganizador(organizador).then(
        (response)=>{
            console.log(response.data.message)
            Alert.alert('OK', response.data.message)
        },(error)=>{
            Alert.alert('Erro', error.response.data.error)
        }
    )
  }

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Faça Cadastro do Organizador</Text>
        <TextInput 
        style={styles.input}
        placeholder="Nome"
        value={user.nome}
        onChangeText={(value)=> {setUser({...user, nome:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value)=> {setUser({...user, email:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Telefone"
        value={user.telefone}
        onChangeText={(value)=> {setUser({...user, telefone:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value)=> {setUser({...user, password:value})}}
        />
        <TouchableOpacity onPress={handleCadastroOrganizadorScreen} style={styles.button}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
        
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
