import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Button, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const PostScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState(route.params.initName);
  const [price, setPrice] = React.useState(route.params.initPrice);
  const [image, setImage] = React.useState(route.params.initImage);
  const [describe, setDescribe] = React.useState(route.params.initDescribe);
  
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=> (
        <View style={{flexDirection:"row", width:120}}>
          <TouchableOpacity onPress={() => navigation.navigate("PostSignIn")}>
            <Text style={{margin:10}}>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PostLogin")}>
            <Text style={{margin:10}}>
              Login
            </Text>
          </TouchableOpacity>
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
            <Button
              color='red'
              title='Post'
              onPress = {() => {
                setProducts(newProducts)
                  // navigation.navigate({
                  //   name: 'MainScreen',
                  //   params: {
                  //     initName: '',
                  //     initDescribe: '',
                  //     initImage: '',
                  //     initPrice: ''
                  //   }
                  // })
              }}
            />
            <Button
              color='red'
              title='Cancle'
              onPress = {() => {
                navigation.navigate('MainScreen')
              }}
            />
            <Button
              color='red'
              title='Clear'
              onPress = {() => {
                setName('')
                setPrice('')
                setImage('')
                setDescribe('')
              }}
            />
          </View>
        <View style={{flex:1}}>

        </View>
        </View>

      </View>
    </View>
  );
}

export default PostScreen;
