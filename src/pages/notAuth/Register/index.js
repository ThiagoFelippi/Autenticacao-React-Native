import React, { useState , useEffect} from 'react';
import {StyleSheet, Text, AsyncStorage} from 'react-native'

import {Container, Form, Label, Input, Title, Button} from '../style'

import api from '../../../services/api'

const Login = ({navigation}) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try{
      const {data} = await api.post("/", {name, password})
      const token = data.token 
      console.log(data + '    ' + token)
      if(token){
        await AsyncStorage.setItem("token", token)
        navigation.navigate("Home")
      }
    }catch(err){
      alert("Nome do usuário já cadastrado, favor mude o nome")
      
    }
  }

  return(
    <Container>
      <Title> Registre-se já! </Title>
      <Form>
        <Label> Nome </Label>
        <Input onChange={e => setName(e.nativeEvent.text)} />
        <Label> Senha </Label>
        <Input secureTextEntry={true} onChange={e => setPassword(e.nativeEvent.text)} />
        <Button onPress={handleLogin}> 
          <Text style={{color: "white"}}> Registrar </Text> 
        </Button> 
      </Form>
    </Container>
  )
}

export default Login