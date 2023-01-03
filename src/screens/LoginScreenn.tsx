import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { LoginStyles } from '../theme/LoginTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext, AuthState } from '../context/AuthContext';

interface Props extends StackScreenProps<any,any>{
}


export const LoginScreenn = ({navigation}:Props) => {

const {logOut,signIn, authState} = useContext(AuthContext)
const {isLoggedIn}=authState;
  
  const testCredentials = {
    username: 'ADMIN',
    password: 'ADMIN'
  };

  function checkCorreo(email: string, contraseña:string,user:string,password:string) {
    if (email === user  && contraseña === password) {
      Alert.alert(
        'Login Exitoso', '',
        [{ text: 'OK' }],
        { cancelable: true }

      );
      signIn();
      navigation.navigate('HomeScreen')
    } else {
      Alert.alert(
        'Login Fallido', '',
        [{ text: 'OK' }],
        { cancelable: true }

      );
    }
  }
  
  
  const [email,Setemail] = useState('')
  const [password,Setpassword]=useState('')

  return (
    <>
    
    
   <Background/>
   <KeyboardAvoidingView></KeyboardAvoidingView>
   <View style={LoginStyles.formContainer}>

  
    <Logo/>
    
    

    <Text style={LoginStyles.label} > Email  </Text>
   <TextInput   
   value={email}
   onChangeText={(email) => Setemail(email)}
   placeholder="Ingrese su email"
   placeholderTextColor="rgba(255,255,255,0.7)"
   keyboardType="email-address"
   
   style={LoginStyles.inputField}
  
   
   />
   <Text>{email}</Text>
   
   <Text style={LoginStyles.label} > Contraseña  </Text>
   <TextInput
   placeholder="Ingrese su contraseña"
   value={password}
   onChangeText={(password) => Setpassword(password)}
   placeholderTextColor="rgba(255,255,255,0.7)"
   secureTextEntry
   style={LoginStyles.inputField}
   />
   <Text>{password}</Text>
   
   <View style={LoginStyles.buttonContainer}>
    
    {
    
    !isLoggedIn ? <TouchableOpacity
                              activeOpacity={0.8}
                              style={LoginStyles.button}
                              onPress={() => 
                                             (checkCorreo(email,password,testCredentials.username,testCredentials.password))}>
        
        <Text>Login</Text>
    </TouchableOpacity> : null
}


   </View>

   <View style={LoginStyles.buttonContainer}>
    
    {
    
    isLoggedIn ? <TouchableOpacity
                              activeOpacity={0.8}
                              style={LoginStyles.buttoff}
                              onPress={() => {
                                navigation.navigate('HomeScreen'); logOut();}}
                                             >
        
        <Text>LogOut</Text>
    </TouchableOpacity> : null
}


   </View>

   </View>
</>
    
  )
  

}
