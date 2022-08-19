import * as React from 'react';
import { useState, useEffect } from 'react';
import {useValue} from '../navigator/userInfProvider';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const PostScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  const [describe, setDescribe] = React.useState(""); //route.params.initDescribe)
  
  
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
    <View style={{flex: 1}}>
      <View style={{flex:2,alignItems:"center",backgroundColor:"black"}}>
          <Text style={{fontSize:64,padding:25,color:"yellow"}}>
              Post my products
          </Text>
      </View>
      <View style={{flex:10, backgroundColor:"lightgreen"}}>
        <Text> Product </Text>
        <View style={{flex:1, margin: 20, alignItems:"center"}}>  
          <View style={{flexDirection:"row"}}>
            <TextInput
              style={{
                backgroundColor: 'white',
                color: 'black',
                width: Dimensions.get('window').width*0.3,
                borderWidth: 1,
                margin: 10,
                padding:10}}
              placeholder="Name..."
              onChangeText={text => {setName(text)}}
              value={name}
            />
            <TextInput
              style={{
                backgroundColor: 'white',
                color: 'black',
                width: Dimensions.get('window').width*0.3,
                borderWidth: 1,
                margin: 10,
                padding:10}}
              placeholder="price..."
              onChangeText={text => {setPrice(text)}}
              value={price}
            />
          </View>
          <View style={{flexDirection:"row"}}>
            <Image
              style={{
                borderWidth:1,
                backgroundColor: "white",
                height: Dimensions.get('window').width*0.3,
                width: Dimensions.get('window').width*0.3,
                margin: 12 }}
              source={{uri:image}}
            />
             <TextInput
              multiline
              numberOfLines={5}
              style={{
                borderWidth: 1,
                backgroundColor:'white',
                color: 'black',
                height: Dimensions.get('window').width*0.3,
                width: Dimensions.get('window').width*0.3,
                margin: 12,
                padding: 10
              }}
              placeholder="Text here..."
              onChangeText={text => {setDescribe(text)}}
              value={describe}
              />

          </View>
            
            <TextInput
              style={{
                backgroundColor: 'white',
                color: 'black',
                height: 40,
                width: Dimensions.get('window').width*0.6,
                margin: 12,
                padding:10,
                borderWidth: 1}}
              placeholder="Input my image..."
              onChangeText={text => {setImage(text)}}
              value={image}
            />
          <View style={{flex: 1, flexDirection: 'row',alignItems:"flex-end"}}>
            <TouchableOpacity
              onPress = {() => {
                  // setProducts(newProducts)
                    // navigation.navigate({
                    //   name: 'MainScreen',
                    //   params: {
                    //     initName: '',
                    //     initDescribe: '',
                    //     initImage: '',
                    //     initPrice: ''
                    //   }
                    // })
                }}>
                <Text style={styles.button}>
                  Post
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {() => {
                navigation.navigate('Home')
              }}>
                <Text style={styles.button}>
                Cancle
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {() => {
                setName('')
                setPrice('')
                setImage('')
                setDescribe('')
              }}>
                <Text style={styles.button}>
                  Clear
                </Text>
            </TouchableOpacity>
          </View>
        <View style={{flex:1}}>

        </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "coral",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 18,
    alignItems:"center"
  },
});


export default PostScreen;
