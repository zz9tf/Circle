import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

import StoreDatabase from '../activities/storeDatabase.js'
import GetDatabase from '../activities/getDatabase.js'

const NewEditScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState(route.params.initName);
  const [price, setPrice] = React.useState(route.params.initPrice);
  const [image, setImage] = React.useState(route.params.initImage);
  const [describe, setDescribe] = React.useState(route.params.initDescribe);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>
              Post my products
          </Text>
      </View>
      <View style={{flex:10}}>
        <View style={styles.horizontal}>
          <View style={styles.vertical}>
            <Text> Product </Text>
            <View style={{alignItems: "center"}}>
              <View style={{flexDirection:"row"}}>
                <TextInput
                  style={{backgroundColor: 'white', color: 'black', height: 30,
                    margin: 12, borderWidth: 1, padding: 10}}
                  placeholder="Name..."
                  onChangeText={text => {setName(text)}}
                  value={name}
                />
                <TextInput
                  style={{backgroundColor: 'white', color: 'black', height: 30,
                    margin: 12, borderWidth: 1, padding: 10}}
                  placeholder="price..."
                  onChangeText={text => {setPrice(text)}}
                  value={price}
                />
              </View>
              <Image
                style={{
                  borderColor: "black",
                  borderWidth:1,
                  backgroundColor: "white",
                  width: 400,
                  height: 400 }}
                source={{uri:image}}
              />
              <TextInput
                style={{backgroundColor: 'white', color: 'black', height: 40,
                 width: 400, margin: 12, borderWidth: 1, padding: 10,}}
                placeholder="Input my image..."
                onChangeText={text => {setImage(text)}}
                value={image}
              />
            </View>
          </View>
          <View style={styles.vertical}>
            <Text> Descibe my products: </Text>
            <View style={{alignItems: 'center'}}>
              <TextInput
              multiline
              numberOfLines={10}
              style={styles.input}
              placeholder="Text here..."
              onChangeText={text => {setDescribe(text)}}
              value={describe}
              />
              <View style={{flexDirection: 'row', width: 400, justifyContent: 'space-around'}}>
                <Button
                  color='red'
                  title='Preview'
                  onPress = {() => {
                    navigation.navigate('NewPreviewScreen', {
                      name: name,
                      describe: describe,
                      image: image,
                      price: price
                    })
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
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex:2,
    alignItems:'center',
    backgroundColor:'black'
  },
  headerText: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"yellow",
  },
  vertical: {
    flexDirection:'column',
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    margin: 20,
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'lightgreen',
  },
  input:{
    backgroundColor: 'white',
    color: 'black',
    height: 400,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#fffff5',
  },
});

export default NewEditScreen;
