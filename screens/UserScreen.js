import React from 'react'
import {useValue} from '../navigator/userInfProvider';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: ()=> (
            <View>
              {useValue().user.login?
                <View style={{flexDirection:"row", width:120}}>
                  <TouchableOpacity onPress={() => navigation.navigate("UserInformationScreen")}>
                    <Text style={{margin:10}}>
                      Hello, {useValue().user.userName}
                    </Text>
                  </TouchableOpacity>
                </View>:
                <View style={{flexDirection:"row", width:120}}>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                  <Text style={{margin:10}}>
                    Sign in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={{margin:10}}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              }
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                <Image
                    style={{ width: 60, height: 30, margin:10 }}
                    source={require("../images/Circle.png")} 
                />
            </TouchableOpacity>
          )
        });
      })


  return (
    <View style={{flex:1, flexDirection:"column"}}>
        <Text style={style.textStyle} onPress={()=>{navigation.navigate("UserInformationScreen")}}>
            My profile
        </Text>
        <Text style={style.textStyle}>
            My products
        </Text>
        <Text style={style.textStyle}>
            My texts
        </Text>
        <Text style={style.textStyle}>
            Selling records
        </Text>
        <Text style={style.textStyle}>
            help
        </Text>
        <Text style={style.textStyle}>
            Favorites
        </Text>
        <Text style={style.textStyle} onPress={()=>{navigation.navigate("About")}}>
            About
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    textStyle:{
        fontSize:32,
        margin:10,
        borderBottomWidth: 1,
        color:"black"
    },
})

export default UserScreen;
