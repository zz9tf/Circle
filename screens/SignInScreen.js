import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Axios from "axios";

const SignInScreen = () => {

  const [userName, setUserName] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [institution, setInstitution] = useState();
  const [currentUser,setCurrentUser] = useState();

  const registration = async(
    userName,
    gender,
    email,
    phoneNumber,
    institution
    ) => {
    try{
      let appURL = "http://127.0.0.1:3000"
      let result = await Axios.post(appURL+'/register',{
        userName: userName,
        gender:gender,
        email:email,
        phoneNumber:phoneNumber,
        institution:institution,
      })


    }catch(e){
      console.log('error'+e)
      console.dir(e)
      throw(e)
    }
  }
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
      <View style={styles.inputplace}>
        <Text style={{margin:5, fontSize:32, fontWeight: 'bold'}}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={(text)=>setUserName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          onChangeText={(text)=>setGender(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text)=>setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          onChangeText={(text)=>setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Institution"
          onChangeText={(text)=>setInstitution(text)}
        />
        
        <View style={{margin:10, width: Dimensions.get("window").width*0.7}}>
          <TouchableOpacity
            onPress={() => registration(
              userName,
              gender,
              email,
              phoneNumber,
              institution)}
            style={styles.button}
          >
            <Text style={{color:"white", fontSize:20}}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin:10, width: Dimensions.get("window").width*0.7}}>
          <Text style={{color:"white", fontSize:20}}>{currentUser}</Text>
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
  inputplace:{
    padding:10,
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
