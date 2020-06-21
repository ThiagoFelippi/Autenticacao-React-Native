import React, { useState , useEffect} from 'react';
import {StyleSheet, Text, AsyncStorage} from 'react-native'

import {Container, Form, Label, Input, Title, Button, Underline, CreateAccountText} from '../style'

import api from '../../../services/api'

const Login = ({navigation}) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
    const verifyToken = async () => {
      const tokenExists = await AsyncStorage.getItem("token")
      tokenExists ? navigation.navigate("Home") : null
    }
    verifyToken()
  })

  const handleLogin = async () => {
    try{
      const {data} = await api.post("/login", {name, password})
      const token = data.token 
      console.log( data + '  ' + token)
      if(token){
        await AsyncStorage.setItem("token", token)
        navigation.navigate("Home")
      }
    }catch(err){
      alert("Insira os dados corretamente")
      
    }
  }

  return(
    <Container>
      <Title> Entre já! </Title>
      <Form>
        <Label> Nome </Label>
        <Input onChange={e => setName(e.nativeEvent.text)} />
        <Label> Senha </Label>
        <Input secureTextEntry={true} onChange={e => setPassword(e.nativeEvent.text)} />
        <Button onPress={handleLogin}> 
          <Text style={{color: "white"}}> Entrar </Text> 
        </Button> 
      </Form>
      <CreateAccountText>Caso nao tenha uma conta <Underline onPress={() => navigation.navigate("Register")}> CRIE UMA </Underline></CreateAccountText> 
    </Container>
  )
}

export default Login