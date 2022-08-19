
import React from 'react';
import {useValue} from '../navigator/userInfProvider';
import { Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

export default function AboutScreen({navigation}) {

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
      )
    });
  })

  return (
    <View style={{flexDirection: "column", flex:1}}>
      <ScrollView>
        <View style={{alignItems: "center"}}>
          <Image
            style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width*0.6, resizeMode: 'stretch'}}
            source={require("../images/Welcome.jpg")}
          />
        </View>
        
        <Text style={{fontSize: 32, margin:10}}>
          What is Circle?
        </Text>
        <Text style={{margin:10}}>
          Circle is a platform allowing you to trade second-hand item.
        </Text>
        <Text style={{fontSize: 32, margin:10}}>
          Why Circle?
        </Text>
        <Text style={{margin:10}}>
          The platform is open to all users who have idle items in their homes who want to sell, 
        or who want to shop at a more affordable price. Simple operations and face-to-face offline 
        transactions make item transactions easier. And the whole transaction on this platform is free.
        </Text>
        <Text style={{fontSize: 32, margin:10}}>
          Who benefits?
        </Text>
        <Text style={{margin:10}}>
          - Who has idle things in your home that need to be sold. This platform will provide you with a broader sales channel.
        </Text>
        <Text style={{margin:10}}>
          - Who wants to buy something at a lower price.
        </Text>
      </ScrollView>
    </View>
  );
}
