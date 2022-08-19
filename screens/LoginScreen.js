import React, {useState, useEffect} from 'react'
import {useValue} from '../navigator/userInfProvider';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import Axios, * as others from 'axios';

const SignInScreen = ({navigation}) => {
  const {user, setUser} = useValue();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async(
    userName,
    password
  ) => {
    try {
      let result = {data:[]}
      //let appURL = "http://localhost:5000"
      result = await Axios.get(user.appURL+"/login",{ 
        params: {
          userName: userName,
          password: password
      }})
      if (result.data.login) {
        alert(result.data.message)
        setUser({
          ...user,
          userName: result.data.userName,
          password: result.data.password,
          gender: result.data.gender,
          email: result.data.email,
          phoneNumber: result.data.phoneNumber,
          institution: result.data.institution,
          biography: result.data.biography,
          validated: result.data.validated,
          login: result.data.login,
          })
        navigation.goBack();
      } else{
        setMessage(result.data.message)
      }
    } catch (e) {
      throw(e)
    }
  }

  useEffect(()=>{
    if (user.login){
      navigation.goBack();
    } 
  },[user]);

  return (
    <View style={{flex:1, flexDirection: "column", alignItems:"center", backgroundColor:"lightblue"}}>
      <View style={{marginVertical:50}}>
        <Image
          style={{ 
            width: Dimensions.get("window").width*0.2,
            height: Dimensions.get("window").width*0.2,
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20
           }}
          source={require("../images/myCircleIcon.png")} 
        />
      </View>
      <View style={styles.inputPlace}>
        <Text style={{margin:5, fontSize:32, fontWeight: 'bold'}}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="User name"
          onChangeText={(text)=>setUserName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Passward"
          onChangeText={(text)=>setPassword(text)}
        />
        <View style={{ margin:10, width: Dimensions.get("window").width*0.7}}>
          <TouchableOpacity
            onPress={()=>{login(userName, password)}}
            style={styles.button}
          >
            <Text style={{color:"white", fontSize:20}}>LOGIN</Text>
          </TouchableOpacity>
          <Text>
            {message}
          </Text>
        </View>
      </View>
      
      
      

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    alignItems:"center"
  },
  Icon:{
    width: Dimensions.get('window').width*0.3,
    height: Dimensions.get('window').width*0.3,
    margin:10,
    resizeMode: "center"
  },
  inputPlace:{
    padding: 20,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor:"white"},
  input:{
    color: 'black',
    height: 40,
    width: Dimensions.get('window').width*0.7,
    margin: 6,
    borderWidth: 1,
    padding: 6,
  },
});
export default SignInScreen;
