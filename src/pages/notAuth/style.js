import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #489;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`

export const Form = styled.View`
  width: 45%;
  position: relative;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px #0006;
`

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 25px 0  10px 20px;
  align-self: flex-start;
`

export const Input = styled.TextInput`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  border: none;
  box-shadow: 1px 1px 4px #0005;
  background-color: #e6e6e6;
`

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
  width: 60%;
  height: 50px;
  background-color: #869;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 1px 2px #0005;  
`

export const Underline = styled.Text`
  text-decoration: underline white;
`

export const CreateAccountText = styled.Text`
  margin-top: 20px;
  color: white;
`