import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

const SignInScreen = () => {
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
        <TextInput style={styles.input} placeholder="Email"/>
        <TextInput style={styles.input} placeholder="Passward" />
        <View style={{ margin:10, width: Dimensions.get("window").width*0.7}}>
          <TouchableOpacity
            onPress={()=>{}}
            style={styles.button}
          >
            <Text style={{color:"white", fontSize:20}}>LOGIN</Text>
          </TouchableOpacity>
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
