import React, { useEffect } from 'react';
import {Text, StyleSheet, AsyncStorage} from 'react-native'
import LottieView from "lottie-react-native";

import {Container, Title, Div} from './style'

import Lottie from '../../../assets/24561-programmer-doing-his-work-during-lockdown.json'

const Home = ({navigation}) => {

  useEffect(() => {
    const verifyPermission = async () => {
      const token = await AsyncStorage.getItem("token")
      token ? null : navigation.navigate("Login")
    }
    verifyPermission()
  })
  return (
    <Container>
      <Title> Seja bem vindo </Title>
      <Div>
        <LottieView autoPlay  style={styles.lottie} source={Lottie} />
        <Text>Aqui ficaria o conteúdo da página</Text> 
      </Div>
    </Container>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
    marginBottom: 20
  }
})

export default Home